import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Shiny from './components/Shiny';
import Summary from './components/Summary';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


const Root = () => (
  <HashRouter>
    <App>
      <Route exact path="/" component={Home} />
      <Route exact path="/summary" component={Summary} />
      <Route exact path="/app" component={Shiny} />
    </App>
  </HashRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
