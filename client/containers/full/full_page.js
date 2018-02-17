import React from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';

import Header from '../../components/Header/header';
import Sidebar from '../../components/Sidebar/sidebar';
import Breadcrumb from '../../components/Breadcrumb/breadcrumb';

import Aside from '../../components/Aside/aside';
import Footer from '../../components/Footer/footer';
import Dashboard from '../../views/Dashboard/dashboard';


// Components
import Buttons from '../../views/Components/Buttons/buttons';

class Full extends React.Component{


  render(){
    return(
      <div className="app">
        <Header/>
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="/components/buttons" name="Buttons" component={Buttons}/>
                <Redirect from="/" to="/dashboard"/>
                
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Full;