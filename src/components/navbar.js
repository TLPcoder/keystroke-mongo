'use strict';
import React, {Component} from 'react';
import { Link } from 'simple-react-router';

const Navbar = props => {
    function logout(){
        sessionStorage.clear();
    }
    if(props.navbar === 'login'){
        return(
            <div id='login-navbar'>
                <h1>Keystroke</h1>
                <Link href="/profile">Create Accont</Link>
            </div>
        )
    }else if(props.navbar === 'create-account'){
        return(
            <div id='login-navbar'>
                <h1>Keystroke</h1>
                <Link href="/">Login</Link>
            </div>
        )
    }else if(props.navbar === 'profile'){
        return(
            <div id='login-navbar'>
                <h1>Keystroke</h1>
                <Link href="/" onClick={logout}>Logout</Link>
                <Link href="/update-profile">Update Profile</Link>
            </div>
        )
    }else{
        return(
            <div id='login-navbar'>
                <h1>Keystroke</h1>
                <Link href="/" onClick={logout}>Logout</Link>
                <Link href="/profile">Profile</Link>
            </div>
        )
    }
}
export default Navbar
