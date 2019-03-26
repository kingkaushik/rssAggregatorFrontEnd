import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Main from './components/main';
import Content from './components/content';
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';
import Header from './components/Header'
import Subscription from './screens/Subscription'
ReactDOM.render(<Router>
    <div>
      <Route path='/' component={Header} />
      <Route exact path='/' component={Main} />
      <Route path='/content' component={Content} />
      <Route path='/subscription' component={Subscription} />
    </div>
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
