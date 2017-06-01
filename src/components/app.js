'use strict';
import React from 'react';
import SimpleReactRouter from 'simple-react-router';
import Login from './login';
import CreateAccount from './create-account';
import Profile from './profile';
import UpdateProfile from './update-profile';
// Pages

export default class App extends SimpleReactRouter {
  routes(map){
    map('/',Login);
    map('/create-account',CreateAccount);
    map('/profile', Profile);
    map('/update-profile', UpdateProfile);
  }
}
