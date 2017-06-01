'use strict';
import React, {Component} from 'react';
import Navbar from './navbar';
import CreateAccountContainer from './create-account-container';

export default class CreateAccount extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Navbar navbar='create-account'/>
                <CreateAccountContainer/>
            </div>
        )
    }
}
