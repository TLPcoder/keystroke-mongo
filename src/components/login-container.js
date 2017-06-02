'use strict';
import React, {Component} from 'react';
import { Link } from 'simple-react-router';
import axios from 'axios';

export default class LoginContainer extends Component{
    constructor(props){
        super(props);
    }
    componentWillUnmount(){
        var data = sessionStorage.getItem('email');
        console.log(data);
        if(!data){
            console.log('shit');
        }
    }
    login(){
        axios.post('https://keystroke-interview.herokuapp.com/users/login',{
            email: document.getElementById('login-email').value,
            password: document.getElementById('login-password').value
        }).then(data =>{
            if(data.data.length !== 0){
                sessionStorage.setItem('email', data.data[0].email);
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
                <input id = 'login-email' className='login-text' type="text" placeholder='email'/>
                <br/>
                <input id = 'login-password' className='login-text' type="password" placeholder='password'/>
                <br/>
            <Link href="/profile"><input id='login-button' type="button" value='login' onClick ={this.login}/></Link>
            </div>
        )
    }
}
