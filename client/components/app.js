import React from 'react';
import NavigationBar from './navigation_bar';

class App extends React.Component{
  render() {
    return(
      <div className="container">
        <NavigationBar/>
        {this.props.children}
      </div>
    );
  }
}

export default App;