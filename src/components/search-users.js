'use strict';
import React, {Component} from 'react';
import Navbar from './navbar';

export default class SearchUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: 'Loading...'
        };
    }
    componentWillMount() {
        axios.get('http://localhost:8080/users/all-users').then(data => {
            this.state.users = data.map(el => {
                return (
                    <div className='user-card'>
                        <img src={el.image} alt="User never uploaded an image" height='250px' width='250px'/>
                        <h4>{el.firstName} {el.lastName}</h4>
                    </div>
                )
            });
        }).catch(err => {
            console.log(err);
        });
    }
    render() {
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
