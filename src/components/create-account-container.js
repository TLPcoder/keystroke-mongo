'use strict';
import React, {Component} from 'react';
import axios from 'axios';

export default class CreateAccountContainer extends Component{
    constructor(props){
        super(props);
        this.createUser = this.createUser.bind(this);
    }
    createUser(){
        axios.post('http://localhost:8080/users/create-user',{
            firstName:document.getElementById('create-user-firstname').value,
            lastName:document.getElementById('create-user-lastname').value,
            email:document.getElementById('create-user-email').value,
            password:document.getElementById('create-user-password').value,
            description:document.getElementById('create-user-description').value,
            image:document.getElementById('create-user-image').value
        }).then(data => {
            console.log(data);
            if(data.data.user !== true){
                sessionStorage.setItem('email', data.data[0].email);
                window.location = '/profile';
            }else{
                alert('The email address you have entered is already in use');
            }
        }).catch(err=>{
            console.log(err);
        });
    }
    render(){
        return(
            <div id = 'create-account-container'>
                <input id ='create-user-firstname' type="text" placeholder='first name'/>
                <input id ='create-user-lastname' type="text" placeholder='last name'/>
                <input id='create-user-email' placeholder ='email' type="text"/>
                <input id ='create-user-password' type="password" placeholder='password'/>
                <textarea id ='create-user-description' name="Description" cols="30" rows="10"></textarea>
                <input id ='create-user-image' type="text" placeholder = 'image url'/>
                <input type="button" value ='Create Account' onClick={this.createUser}/>
            </div>
        )
    }
}
