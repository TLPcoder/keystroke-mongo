'use strict';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CreateAccountContainer = props => {
    function createUser(){
        axios.post('http://localhost:8080/users/create-user',{
            firstName:document.getElementById('create-user-firstname').value,
            lastName:document.getElementById('create-user-lastname').value,
            email:document.getElementById('create-user-email').value,
            password:document.getElementById('create-user-password').value,
            description:document.getElementById('create-user-description').value,
            image:document.getElementById('create-user-image').value
        }).then(data => {
            sessionStorage.setItem('email', document.getElementById('create-user-email').value);
            props.router.history.push('/profile');
            console.log(data);
        }).catch(err=>{
            console.log(err);
        });
    }
    return(
        <div id = 'create-account-container'>
            <form action="">
                <input className='create-text' id ='create-user-firstname' type="text" placeholder='first name' required/>
                <input className='create-text' id ='create-user-lastname' type="text" placeholder='last name' required/>
                <input className='create-text' id='create-user-email' placeholder ='email' type="email" required/>
                <input className='create-text' id ='create-user-password' type="password" placeholder='password' required/>
                <textarea className='create-text' id ='create-user-description' name="Description" cols="30" rows="10"></textarea>
                <input className='create-text' id ='create-user-image' type="text" placeholder = 'image url'/>
                <br/>
                <input id='create-button' type="button" value ='Create Account' onClick={createUser}/>
            </form>
        </div>
    )
}
export default CreateAccountContainer;
