'use strict';
import React from 'react';
import Login from './login';
import CreateAccount from './create-account';
import Profile from './profile';
import UpdateProfile from './update-profile';
import SearchUsers from './search-users';
import SearchUserProfile from './search-user-profile';
import {Switch, Route} from 'react-router-dom';

const App = props => {
    return (
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/create-account' component={CreateAccount}/>
            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/update-profile' component={UpdateProfile}/>
            <Route exact path='/search-users' component={SearchUsers}/>
            <Route path='/search-user/:profile' component={SearchUserProfile}/>
        </Switch>
    )
}
export default App;
