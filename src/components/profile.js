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
        if(!data){
            alert('error');
        }
        axios.get(`https://keystroke-backend.herokuapp.com/users/${data}/`)
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
                <Navbar navbar={'profile'}/>
                <div  id = 'profile-container'>
                    <img src={this.state.userInfo.image} alt="User doesnt have a profile image" height='300px' width='300px'/>
                    <h4>{this.state.userInfo.firstName} {this.state.userInfo.lastName}</h4>
                    <p>{this.state.userInfo.description}</p>
                </div>
            </div>
        )
    }
}
