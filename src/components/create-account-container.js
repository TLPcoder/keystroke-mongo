'use strict';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class CreateAccountContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            description: '',
            image: ''
        };
        this.createUser = this.createUser.bind(this);
        this.updateUserInfo = this.updateUserInfo.bind(this);
    }
    createUser(event) {
        if (this.state.firstName !== '' && this.state.lastName !== '' && this.state.email !== '' && this.state.password !== '') {
            event.preventDefault();
            axios.post('https://keystroke-interview.herokuapp.com/users/create-user', {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                description: this.state.description,
                image: this.state.image
            }).then(data => {
                sessionStorage.setItem('email', this.state.email);
                this.props.router.history.push('/profile');
            }).catch(err => {
                console.log(err);
            });
        } else {
            return;
        }
    }
    updateUserInfo(event) {
        if (event.target.id === 'create-user-firstname') {
            this.state.firstName = event.target.value;
        } else if (event.target.id === 'create-user-lastname') {
            this.state.lastName = event.target.value;
        } else if (event.target.id === 'create-user-email') {
            this.state.email = event.target.value;
        } else if (event.target.id === 'create-user-password') {
            this.state.password = event.target.value;
        } else if (event.target.id === 'create-user-description') {
            this.state.description = event.target.value;
        } else if (event.target.id === 'create-user-image') {
            this.state.image = event.target.value;
        }
    }
    render() {
        return (
            <div id='create-account-container'>
                <form action="">
                    <input className='create-text' id='create-user-firstname' type="text" placeholder='first name' required onChange={this.updateUserInfo}/>
                    <input className='create-text' id='create-user-lastname' type="text" placeholder='last name' required onChange={this.updateUserInfo}/>
                    <input className='create-text' id='create-user-email' placeholder='email' type="email" required onChange={this.updateUserInfo}/>
                    <input className='create-text' id='create-user-password' type="password" placeholder='password' required onChange={this.updateUserInfo}/>
                    <textarea className='create-text' id='create-user-description' name="Description" cols="30" rows="10" onChange={this.updateUserInfo}></textarea>
                    <input className='create-text' id='create-user-image' type="text" placeholder='image url' onChange={this.updateUserInfo}/>
                    <br/>
                    <input id='create-button' type="submit" value='Create Account' onClick={this.createUser}/>
                </form>
            </div>
        )
    }
}
