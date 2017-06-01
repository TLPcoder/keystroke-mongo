'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Login from './components/login';
import './styles/app.scss';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

// const render = Component => {
//   ReactDOM.render(
//     <AppContainer>
//       <Component/>
//     </AppContainer>,
//     document.getElementById('main')
//   )
// }
//
// render(Login)
// if (module.hot) {
//   module.hot.accept('./components/app', () => { render(Login) })
// }

ReactDOM.render(
    <App/>
  , document.getElementById('main'));
