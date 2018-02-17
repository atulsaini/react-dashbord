import React from 'react';
import NavigationBar from './navigation_bar';

export default class About extends React.Component{
  render(){
    return(
      <div className="container">
        <NavigationBar/>
        <div className="jumbotron">
          <h1 className="red" >About</h1>
        </div>
      </div>
    )
  }
}