/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App.react';
import ProductDescription from './components/ProductDescription.react';
import Homepage from './components/Homepage.react';
import NavigationModal from './components/containers/NavigationModal.react';
import store from './redux/store';

import axios from 'axios';

// import { Router, Route, IndexRoute, Link } from 'react-router';
import {
  BrowserRouter,
  HashRouter,
  Router,
  Route,
  Link
} from 'react-router-dom';

const retrieveComponent = (location, callback) => {
  console.log(location);
  callback(null, props => <Homepage />);
};

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <NavigationModal visible={true} />
        {/* <Route path="/:section/:item" getComponent={retrieveComponent} /> */}
        <Route path="/" component={Homepage} />
        {/* <Route path="/article" component={App} /> */}
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('app-main')
); // eslint-disable-line
