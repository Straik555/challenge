import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {PersonstoreServiceProvider} from './components/ServiceContext';
import store from './store'
import PersonstoreService from './service';
import ErrorBountry from './components/ErrorBountry'

const personstoreService = new PersonstoreService();

ReactDOM.render(
  <Provider store={store}>
      <ErrorBountry>
        <PersonstoreServiceProvider value={personstoreService}>
          <Router>
            <App />
          </Router>
        </PersonstoreServiceProvider>
      </ErrorBountry>
  </Provider>,
  document.getElementById('root')
);

