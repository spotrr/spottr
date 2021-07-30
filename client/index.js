import React from 'react';
import { render } from 'react-dom';
//import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
import App from './App';
//import store from './store';

// uncomment so that webpack can bundle styles
//import styles from './scss/application.scss';

render(
  //   <BrowserRouter>
  <App />,
  //   </BrowserRouter>,
  document.getElementById('root')
);
