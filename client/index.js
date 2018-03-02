import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, browserHistory} from 'react-router-dom';
import './sass/style.scss'// import App from './components/App';
// import { Router, browserHistory } from 'react-router';

// import ApplicationRoute from './routes';

// containers
import Full from './containers/full/full_page';

// render(<Router history={browserHistory} routes={routes}/>
//   , document.getElementById('app'));

ReactDOM.render( 
  <HashRouter history={browserHistory}>
    <Switch>
      <Route path="/" name="Home" component={Full} />
    </Switch>
  </HashRouter> , document.getElementById('root'));