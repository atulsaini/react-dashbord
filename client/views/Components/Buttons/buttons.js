import React from 'react';

class Button extends React.Component{
  render(){
    return(
      <div className="button-type">
        hello<h3>Buttons Type</h3>

        <div className="border p-3 mt-3">
          <button type="button" className="btn btn-primary mr-2">Primary</button>
          <button type="button" className="btn btn-secondary mr-2">Secondary</button>
          <button type="button" className="btn btn-success mr-2">Success</button>
          <button type="button" className="btn btn-danger mr-2">Danger</button>
          <button type="button" className="btn btn-warning mr-2">Warning</button>
          <button type="button" className="btn btn-info mr-2">Info</button>
          <button type="button" className="btn btn-light mr-2">Light</button>
          <button type="button" className="btn btn-dark mr-2">Dark</button>
          <button type="button" className="btn btn-link mr-2">Link</button>
        </div>

        <h3 className="mt-3">Button tags</h3>
        <div className="border p-3 mt-3">
          <a className="btn btn-primary mr-2" href="#" role="button">Link</a>
          <button className="btn btn-primary mr-2" type="submit">Button</button>
          <input className="btn btn-primary mr-2" type="button" value="Input"/>
          <input className="btn btn-primary mr-2" type="submit" value="Submit"/>
          <input className="btn btn-primary mr-2" type="reset" value="Reset"/>
        </div>

        <h3 className="mt-3">Outline buttons</h3>
        <div className="border p-3 mt-3">
          <button type="button" className="btn btn-outline-primary mr-2">Primary</button>
          <button type="button" className="btn btn-outline-secondary mr-2">Secondary</button>
          <button type="button" className="btn btn-outline-success mr-2">Success</button>
          <button type="button" className="btn btn-outline-danger mr-2">Danger</button>
          <button type="button" className="btn btn-outline-warning mr-2">Warning</button>
          <button type="button" className="btn btn-outline-info mr-2">Info</button>
          <button type="button" className="btn btn-outline-light mr-2">Light</button>
          <button type="button" className="btn btn-outline-dark mr-2">Dark</button>
        </div>

        <h3 className="mt-3">Large Sizes buttons</h3>
        <div className="border p-3 mt-3">
          <button type="button" className="btn btn-primary btn-lg mr-2">Large button</button>
          <button type="button" className="btn btn-secondary btn-lg mr-2">Large button</button>
        </div>

        <h3 className="mt-3">Small Sizes buttons</h3>
        <div className="border p-3 mt-3">
          <button type="button" className="btn btn-primary btn-sm mr-2">Small button</button>
          <button type="button" className="btn btn-secondary btn-sm mr-2">Small button</button>
        </div>

        <h3 className="mt-3">Block level button</h3>
        <div className="border p-3 mt-3">
          <button type="button" className="btn btn-primary btn-lg btn-block mr-2">Block level button</button>
          <button type="button" className="btn btn-secondary btn-lg btn-block mr-2">Block level button</button>
        </div>

        <h3 className="mt-3">Active state Link</h3>
        <div className="border p-3 mt-3">
          <a href="#" className="btn btn-primary btn-lg active mr-2" role="button" aria-pressed="true">Primary link</a>
          <a href="#" className="btn btn-secondary btn-lg active mr-2" role="button" aria-pressed="true">Link</a>
        </div>

        <h3 className="mt-3">Disabled state</h3>
        <div className="border p-3 mt-3">
          <button type="button" className="btn btn-lg btn-primary mr-2" disabled>Primary button</button>
          <button type="button" className="btn btn-secondary btn-lg mr-2" disabled>Button</button>
          <a href="#" className="btn btn-primary btn-lg disabled mr-2" role="button" aria-disabled="true">Primary link</a>
          <a href="#" className="btn btn-secondary btn-lg disabled mr-2" role="button" aria-disabled="true">Link</a>
        </div>

        <h3 className="mt-3">Toggle states</h3>
        <div className="border p-3 mt-3">
          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false">
            Single toggle
          </button>
        </div>

        <h3 className="mt-3">Checkbox buttons</h3>
        <div className="border p-3 mt-3">
          <div className="btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-secondary active">
              <input type="checkbox" /> Checked
            </label>
          </div>
        </div>

        <h3 className="mt-3">radio buttons</h3>
        <div className="border p-3 mt-3 mb-3">
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-secondary active">
              <input type="radio" name="options" id="option1" /> Active
            </label>
            <label className="btn btn-secondary">
              <input type="radio" name="options" id="option2" /> Radio
            </label>
            <label className="btn btn-secondary">
              <input type="radio" name="options" id="option3" /> Radio
            </label>
          </div>
        </div>
      </div>

     
      
    )
  }
}

export default Button;