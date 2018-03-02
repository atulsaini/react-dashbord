import React from 'react';

class Header extends React.Component{
  
  sidebarToggle(e){
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e){
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e){
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  render(){
    return(
      <header className="app-header navbar">
        <button className="btn d-lg-none navbar-toggler" onClick={this.mobileSidebarToggle}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
        <a href="#" className="navbar-brand navbar-toggler">Developer</a>
        <button className="btn d-none d-sm-none d-md-block d-lg-block  mr-auto navbar-toggler" onClick={this.sidebarToggle}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
        <button className="btn d-md-down-none navbar-toggler" onClick={this.asideToggle}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
      </header>
    )
  }
}

export default Header;