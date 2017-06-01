'use strict';
import React, {Component} from 'react';
import Navbar from './navbar';
import LoginContainer from './login-container';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Navbar navbar={'login'}/>
                <LoginContainer/>
            </div>
        )
    }
}
