'use strict';
import React, {Component} from 'react';
import { Link } from 'simple-react-router';
import axios from 'axios';

export default class LoginContainer extends Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }
    login(){
        axios.post('http://localhost:8080/users/login',{
            email: document.getElementById('login-email').value,
            password: document.getElementById('login-password').value
        }).then(data =>{
            if(data.data.length !== 0){
                sessionStorage.setItem('email', data.data[0].email);
                window.location = '/profile';
            }else{
                alert('wrong email or password');
            }
        }).catch(err => {
            console.log(err);
        });
    }
    render(){
        return(
            <div id = 'login-container'>
                <input id = 'login-email' type="text" placeholder='email'/>
                <input id = 'login-password' type="password" placeholder='password'/>
                <input type="button" value='login' onClick ={this.login}/>
            </div>
        )
    }
}
