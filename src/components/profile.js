'use strict';
import React, {Component} from 'react';
import Navbar from './navbar';
import axios from 'axios';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: 'Loading...'
        };
        this.componentWillMount = this.componentWillMount.bind(this);
    }
    componentWillMount() {
        var data = sessionStorage.getItem('email');
        axios.get(`https://keystroke-interview.herokuapp.com/users/${data}`).then(data => {
            if (data.data.length !== 0) {
                this.setState({userInfo: data.data[0]});
            } else {
                alert('wrong email or password');
            }
        }).catch(err => {
            console.log(err);
        });
    }
    render() {
        if (this.state.userInfo !== 'Loading...') {
            return (
                <div>
                    <Navbar navbar={'profile'}/>
                    <div id='profile-container'>
                        <img src={this.state.userInfo.image} alt="User doesnt have a profile image" height='300px' width='300px'/>
                        <h4>{this.state.userInfo.firstName} {this.state.userInfo.lastName}</h4>
                        <p>{this.state.userInfo.description}</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <Navbar navbar={'profile'}/>
                    <h1>{this.state.userInfo}</h1>
                </div>
            )
        }
    }
}
