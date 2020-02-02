import React from 'react';
import ReactDOM from 'react-dom';
import { CreateStore } from 'redux';
import { Provider } from 'react-redux';
import App from './routes/App';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('app')
);
