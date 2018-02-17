import React from 'react';
import {NavLink} from 'react-router-dom';
import {Badge, Nav, NavItem, NavLink as RsNavLink} from 'reactstrap';
import classNames from 'classnames';
import nav from './_nav';
import SidebarFooter from '../SidebarFooter/sidebarFooter';
import SidebarHeader from '../SidebarHeader/sidebarHeader';
import SidebarMinimizer from '../SidebarMinimizer/sidebarMinimizer';

class Sidebar extends React.Component {


  // constructor(){
  //   super();
  //   this.state = {
  //     check : false
  //   }
  // }

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName, props) {
    // return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
    return props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';

  }

  render(){
    

    const props = this.props;
    const activeRoute = this.activeRoute;
    const handleClick = this.handleClick;
    
    // badge addon to NavItem
    const badge = (badge) => {
      if (badge) {
        const classes = classNames( badge.class );
        return (<Badge className={ classes } color={ badge.variant }>{ badge.text }</Badge>)
      }
    };

    // simple wrapper for nav-title item
    const wrapper = item => { 
      return (
        item.wrapper && item.wrapper.element ? 
        (React.createElement(item.wrapper.element, item.wrapper.attributes, item.name)): item.name 
      ) 
    };

    //nav list section
    const title = (title, key) => {
      // console.log('check', title)
      const classes = classNames('nav-title', title.class);
      return(
        <li key={key} className={classes}>
          {wrapper(title)}
        </li>
      )
    };

    //nav list divider
    const divider = (divider, key) => {
      const classes = classNames('divider', divider.class);
      return(
        <li key={key} className={classes}></li>
      )
    };


    // nav dropdown
    const navDropdown = (item, key) => {
      // console.log('navDropdown', item);
      return (
        
        <li key={key} className={activeRoute(item.url, props)}>
        
          <a className="nav-link nav-dropdown-toggle" href="#" onClick={handleClick.bind(this)}><i className={item.icon} aria-hidden="true"></i>{item.name}</a>
          <ul className="nav-dropdown-items">
            {navList(item.children)}
          </ul>
        </li>)
    };


    // nav item with nav link
    const navItem = (item, key) => {
      const classes = {
        item: classNames( item.class) ,
        link: classNames( 'nav-link', item.variant ? `nav-link-${item.variant}` : ''),
        icon: classNames( item.icon )
      };
      return (
        navLink(item, key, classes)
      )
    };

    

    
    // nav link
    const navLink = (item, key, classes) => {
      const url = item.url ? item.url : '';
      return (
        <NavItem key={key} className={classes.item}>
          { isExternal(url) ?
            <RsNavLink href={url} className={classes.link} active>
              <i className={classes.icon}></i>{item.name}{badge(item.badge)}
            </RsNavLink>
            :
            <NavLink to={url} className={classes.link} activeClassName="active">
              <i className={classes.icon}></i>{item.name}{badge(item.badge)}
            </NavLink>
          }
        </NavItem>
      )
    };
    

    const isExternal = (url) => {
      console.log(url);
      const link = url ? url.substring(0, 4) : '';
      return link === 'http';
    };
    

    

    // nav type
    const navType = (item, idx) =>
      item.title ? title(item, idx) :
      item.divider ? divider(item, idx) :
      item.children ? navDropdown(item, idx)
                    : navItem(item, idx) ;

    // nav list
    const navList = (items) => {
      console.log('navList', items);
      return items.map( (item, index) => navType(item, index) );
    };

    // navList(nav.items);


    return(
      <div className="sidebar">
        <SidebarHeader/>
        <nav className="sidebar-nav">
          <Nav>
            {navList(nav.items)}
          </Nav>

        </nav>
        <SidebarFooter/>
        <SidebarMinimizer/>
        

      </div>
    )
  }
}

export default Sidebar;