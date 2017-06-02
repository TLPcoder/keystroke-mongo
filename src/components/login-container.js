'use strict';
import React, {Component} from 'react';
import axios from 'axios';

export default class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: 'a'
        };
        this.login = this.login.bind(this);
        this.updateLogin = this.updateLogin.bind(this);
    }
    login() {
        console.log(this.state.password);
        axios.post('http://localhost:8080/users/login', {
            email: this.state.email,
            password: this.state.password
        }).then(data => {
            console.log(data);
            if (data.data.length !== 0) {
                sessionStorage.setItem('email', data.data[0].email);
                this.props.history.push('/profile');
            } else {
                alert('wrong email or password');
            }
        }).catch(err => {
            console.log(err);
        });
    }
    updateLogin(event) {
        if (event.target.id === 'login-email') {
            this.state.email = event.target.value;
        } else {
            this.state.password = event.target.value;
        }
    }
    render() {
        return (
            <div id='login-container'>
                <input id='login-email' className='login-text' type="text" placeholder='email' onChange={this.updateLogin}/>
                <br/>
                <input id='login-password' className='login-text' type="password" placeholder='password' onChange={this.updateLogin}/>
                <br/>
                <input id='login-button' type="button" value='login' onClick ={this.login}/>
            </div>
        )
    }
}
