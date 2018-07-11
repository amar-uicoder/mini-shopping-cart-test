import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import PropTypes from 'prop-types';
import './App.css';

import configureStore from './store/configureStore';
import routes from './routes';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router history={history} routes={routes} />
        </div>
      </Provider>
    );
  }
}

App.PropTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default App;
