'use strict';
import React, {Component} from 'react';
import Navbar from './navbar';
import LoginContainer from './login-container';

const Login = props => {
    return (
        <div>
            <Navbar navbar={'login'}/>
            <LoginContainer/>
        </div>
    )
}

export default Login
