'use strict';
import React, {Component} from 'react';
import Navbar from './navbar';
import axios from 'axios';

export default class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo:'Loading...'
        };
        this.componentWillMount = this.componentWillMount.bind(this);
    }
    componentWillMount(){
        var data = sessionStorage.getItem('email');
        axios.get(`http://localhost:8080/users/${data}/`)
        .then(data => {
            this.setState({
                userInfo:data.data[0]
            });
        }).catch(err => {
            console.log(err);
        });
    }
    render(){
        console.log(this.state.userInfo);
        return(
            <div>
                <Navbar/>
                <img src={this.state.userInfo.image} alt="User doesnt have a profile image"/>
                <p>{this.state.userInfo.firstName} {this.state.userInfo.lastName}</p>
                <p>{this.state.userInfo.description}</p>
            </div>
        )
    }
}
