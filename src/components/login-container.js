'use strict';
import React, {Component} from 'react';
import axios from 'axios';

const LoginContainer = props => {
    function login(){
        axios.post('http://localhost:8080/users/login',{
            email: document.getElementById('login-email').value,
            password: document.getElementById('login-password').value
        }).then(data =>{
            console.log(data);
            if(data.data.length !== 0){
                sessionStorage.setItem('email', data.data[0].email);
                // props.history.push('/profile');
            }else{
                alert('wrong email or password');
            }
        }).catch(err => {
            console.log(err);
        });
    }
    return(
        <div id = 'login-container'>
            <input id = 'login-email' className='login-text' type="text" placeholder='email'/>
            <br/>
            <input id = 'login-password' className='login-text' type="password" placeholder='password'/>
            <br/>
            <input id='login-button' type="button" value='login' onClick ={login}/>
        </div>
    )
}

export default LoginContainer;
