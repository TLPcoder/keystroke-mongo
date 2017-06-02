'use strict';
import React, {Component} from 'react';
import Navbar from './navbar';
import LoginContainer from './login-container';
import { Switch, Route } from 'react-router-dom';

const Login = props => {
    return (
        <div>
            <Navbar navbar={'login'}/>
            <Switch>
                <Route exact path='/' component={LoginContainer}/>
            </Switch>
        </div>
    )
}

export default Login
