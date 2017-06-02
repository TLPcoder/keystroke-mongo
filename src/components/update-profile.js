'use strict';
import React, {Component} from 'react';
import NavBar from './navbar';
import { Link } from 'simple-react-router';
import axios from 'axios';

export default class UpdateProfile extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo: 'Loading...'
        };
        this.componentWillMount = this.componentWillMount.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
        this.updateValue = this.updateValue.bind(this);
    }
    componentWillMount(){
        var data = sessionStorage.getItem('email');
        axios.get(`https://keystroke-interview.herokuapp.com/users/${data}/`)
        .then(data => {
            this.setState({
                userInfo:data.data[0]
            });
        }).catch(err => {
            console.log(err);
        });
    }
    updateValue(event){
        console.log(event.target.id);
        if(event.target.id === 'update-profile-firstname'){
            this.state.userInfo.firstName = event.target.value;
        }else if(event.target.id === 'update-profile-lastname'){
            this.state.userInfo.lastName = event.target.value;
        }else if(event.target.id === 'update-profile-image'){
            this.state.userInfo.image = event.target.value;
        }else if(event.target.id === 'update-profile-description'){
            this.state.userInfo.description = event.target.value;
        }
    }
    updateProfile(){
        axios.put('http://localhost:8080/users/update-user',{
        firstName: this.state.userInfo.firstName,
        lastName: this.state.userInfo.lastName,
        email: this.state.userInfo.email,
        password: this.state.userInfo.password,
        description: this.state.userInfo.description,
        image: this.state.userInfo.image
        }).then(data => {
            if(data.data === 'updated'){
                window.location = '/profile';
            }
        }).catch(err =>{
            console.log(err);
        });
    }
    render(){
        return(
            <div>
                <NavBar/>
            <div id = 'update-account-container'>
                    <input className = 'login-text' id='update-profile-firstname' type="text" placeholder = 'First Name' onChange ={this.updateValue}/>
                    <input className = 'login-text' id='update-profile-lastname' type="text" placeholder = 'First Name' onChange ={this.updateValue}/>
                    <input className = 'login-text' id='update-profile-image' type="text" placeholder = 'Image Url' onChange ={this.updateValue}/>
                    <textarea id='update-profile-description' cols="30" rows="10" placeholder = 'Description' onChange={this.updateValue}></textarea>
                    <br/>
                    <Link href="/profile"><input id = 'update-button' type="button" value="Update" onClick={this.updateProfile}/></Link>
                </div>
            </div>
        )
    }
}
