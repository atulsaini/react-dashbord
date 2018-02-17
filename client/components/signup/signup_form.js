import React from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';

export default class SignupForm extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();
    console.log(this.state);
  }


  render(){
    const option = map(timezones, (key, val) => 
    <option key={val} value={val}>{key}</option>
    );
    return(

      <div>
        <form action="" onSubmit={this.onSubmit}>
          <h1>join our community</h1>

          <div className="form-group">
            <label className="control-label">Username</label>
            <input 
              value={this.state.username}
              onChange={this.onChange}
              type="text"
              name="username"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label className="control-label">email</label>
            <input 
              value={this.state.email}
              onChange={this.onChange}
              type="email"
              name="email"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label className="control-label">password</label>
            <input 
              value={this.state.password}
              onChange={this.onChange}
              type="password"
              name="password"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label className="control-label">passwordConfirmation</label>
            <input 
              value={this.state.passwordConfirmation}
              onChange={this.onChange}
              type="text"
              name="passwordConfirmation"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="control-label">timezone</label>
            <select 
              className="form-control"
              name="timezone" 
              value={this.state.timezone}
              onChange={this.onChange}
            >
              <option value="" disabled>choose your timezone</option>
              {option}
            </select>
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-lg">
              Sign up
            </button>
          </div>
        </form>
      </div>
    );
  }
} 