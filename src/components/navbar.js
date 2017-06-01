'use strict';
import React, {Component} from 'react';
import { Link } from 'simple-react-router';

export default class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {};
        this.logout = this.logout.bind(this);
    }
    logout(){
        sessionStorage.clear();
    }
    render(){
        console.log(this.props.navbar);
        if(this.props.navbar === 'login'){
            return(
                <div id='login-navbar'>
                    <h1>Keystroke</h1>
                    <Link href="/create-account">Create Accont</Link>
                </div>
            )
        }else if(this.props.navbar === 'create-account'){
            return(
                <div id='login-navbar'>
                    <h1>Keystroke</h1>
                    <Link href="/">Login</Link>
                </div>
            )
        }else if(this.props.navbar === 'profile'){
            return(
                <div id='login-navbar'>
                    <h1>Keystroke</h1>
                    <Link href="/" onClick={this.logout}>Logout</Link>
                    <Link href="/update-profile">Update Profile</Link>
                </div>
            )
        }else{
            return(
                <div id='login-navbar'>
                    <h1>Keystroke</h1>
                    <Link href="/" onClick={this.logout}>Logout</Link>
                    <Link href="/profile">Profile</Link>
                </div>
            )
        }
    }
};
