'use strict';
import React, {Component} from 'react';
// import { Link } from 'simple-react-router';
import {Link} from 'react-router-dom'

const Navbar = props => {
    function logout() {
        sessionStorage.clear();
    }
    if (props.navbar === 'login') {
        return (
            <div id='login-navbar'>
                <h1>Keystroke</h1>
                <Link to="/create-account">Create Accont</Link>
            </div>
        )
    } else if (props.navbar === 'create-account') {
        return (
            <div id='login-navbar'>
                <h1>Keystroke</h1>
                <Link to="/">Login</Link>
            </div>
        )
    } else if (props.navbar === 'profile') {
        return (
            <div id='login-navbar'>
                <h1>Keystroke</h1>
                <Link to="/" onClick={logout}>Logout</Link>
                <Link to="/update-profile">Update Profile</Link>
                <Link to="/search-users">Search Users</Link>
            </div>
        )
    } else {
        return (
            <div id='login-navbar'>
                <h1>Keystroke</h1>
                <Link to="/" onClick={logout}>Logout</Link>
                <Link to="/search-users">Search Users</Link>
                <Link to="/profile">Profile</Link>
            </div>
        )
    }
}
export default Navbar
