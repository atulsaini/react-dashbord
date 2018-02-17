import React from 'react';

import Navigation from '../navigation_bar';
import SignupForm from './signup_form';

export default class SignupPage extends React.Component{
  render(){
    return(
      <div>
        <Navigation/>
        <div className="container">
          <div className="col-sm-4">
            <SignupForm />
          </div>
        </div>
      </div>
    )
  }
}
