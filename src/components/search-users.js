'use strict';
import React, {Component} from 'react';
import Navbar from './navbar';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class SearchUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: 'Loading...'
        };
    }
    componentWillMount() {
        axios.get('https://keystroke-interview.herokuapp.com/users/all-users').then(data => {
            console.log(data);
            var mappedUsers = data.data.map(el => {
            var link = `/search-user/${el.email}`;
                return (
                    <div className='user-card'>
                        <Link to={link}>
                            <img src={el.image} alt="User never uploaded an image" height='250px' width='250px'/>
                            <h4>{el.firstName} {el.lastName}</h4>
                        </Link>
                    </div>
                )
            })
            this.setState({
                users:mappedUsers
            })
        }).catch(err => {
            console.log(err);
        });
    }
    render() {
        console.log('user', this.state.users);
        if (Array.isArray(this.state.users)) {
            return (
                <div>
                    <Navbar/>
                    <div id='search-container'>{this.state.users}</div>
                </div>
            )
        } else {
            return (
                <div>
                    <Navbar/>
                    <h1>{this.state.users}</h1>
                </div>
            )
        }
    }
}
