import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import store from './store';
import App from './App';
import { Provider } from 'react-redux';
=======
import App from './App';
>>>>>>> master

import './index.css';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
