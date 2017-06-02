'use strict';
import React, {Component} from 'react';
import Navbar from './navbar';
import CreateAccountContainer from './create-account-container';

const CreateAccount = props => {
    return(
        <div>
            <Navbar navbar='create-account'/>
            <CreateAccountContainer router={props}/>
        </div>
    )
}
export default CreateAccount;
