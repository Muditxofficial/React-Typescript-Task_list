import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bulma/css/bulma.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import store from './store/store'
import {Provider} from 'react-redux'

//The Provider is a component that has a reference to the Store
//and provides the data from the Store to the component it wraps.
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

