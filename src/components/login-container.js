'use strict';
import React, {Component} from 'react';
import axios from 'axios';

export default class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.login = this.login.bind(this);
        this.updateLogin = this.updateLogin.bind(this);
    }
    login(event) {
        if (this.state.password.trim().length !== 0 && this.state.email.trim().length !== 0 && this.state.email.split('').includes('@')) {
            event.preventDefault();
            axios.post('https://keystroke-interview.herokuapp.com/users/login', {
                email: this.state.email,
                password: this.state.password
            }).then(data => {
                if (data.data.length !== 0) {
                    sessionStorage.setItem('email', data.data[0].email);
                    this.props.history.push('/profile');
                } else {
                    alert('wrong email or password');
                }
            }).catch(err => {
                console.log(err);
            });
        } else {
            return;
        }
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
                <form action="">
                    <input id='login-email' className='login-text' type="email" placeholder='email' onChange={this.updateLogin} required/>
                    <br/>
                    <input id='login-password' className='login-text' type="password" placeholder='password' onChange={this.updateLogin} required/>
                    <br/>
                    <input id='login-button' type="submit" value='login' onClick ={this.login}/>
                </form>
            </div>
        )
    }
}
