// import React from 'react';
// import { Route, Router, IndexRoute, Switch } from 'react-router-dom';


// // Components
// import App from './components/app';
// import About from './components/about';

// import Greetings from './components/greetings';
// import SignupPage from './components/signup/signup_page';



// class ApplicationRoute extends React.Component{

//   render(){
//     return (
//       <div>
        
//         <Route exact path="/" component={Full}/>

//         {/* <Route exact path="/" component={App} /> */}
       
//         {/* <Switch>
//           <Route exact path="/" component={Greetings} />
//           <Route path="/signup" component={SignupPage} />
//         </Switch>
//         <Route path="/about" component={About} /> */}

//       </div >
//     )
//   }
// }

// export default ApplicationRoute

const routes = {
  '/': 'Home',
  '/dashboard': 'Dashboard',
  '/components': 'Components',
  // '/charts': 'Charts',
  '/components/buttons': 'Buttons',
  // '/components/social-buttons': 'Social Buttons',
  // '/components/cards': 'Cards',
  // '/components/forms': 'Forms',
  // '/components/modals': 'Modals',
  // '/components/switches': 'Switches',
  // '/components/tables': 'Tables',
  // '/components/tabs': 'Tabs',
  // '/icons': 'Icons',
  // '/icons/font-awesome': 'Font Awesome',
  // '/icons/simple-line-icons': 'Simple Line Icons',
  // '/widgets': 'Widgets'
};
export default routes;
