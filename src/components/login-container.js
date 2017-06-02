'use strict';
import React, {Component} from 'react';
import { Link } from 'simple-react-router';
import axios from 'axios';

const LoginContainer = props => {
    function login(){
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
    function session(event){
        console.log(event.target);
        sessionStorage.clear();
        sessionStorage.setItem('email', event.target.value);
    }
    return(
        <div id = 'login-container'>
            <input id = 'login-email' className='login-text' type="text" placeholder='email' onClick={session}/>
            <br/>
            <input id = 'login-password' className='login-text' type="password" placeholder='password'/>
            <br/>
            <Link href="/profile"><input id='login-button' type="button" value='login' onClick ={login}/></Link>
        </div>
    )
}

export default LoginContainer;
