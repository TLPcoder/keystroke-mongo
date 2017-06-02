'use strict';
import React from 'react';
//import SimpleReactRouter from 'simple-react-router';
import Login from './login';
import CreateAccount from './create-account';
import Profile from './profile';
import UpdateProfile from './update-profile';
import { Switch, Route } from 'react-router-dom';
// Pages

// export default class App extends SimpleReactRouter {
//   routes(map){
//     map('/',Login);
//     map('/create-account',CreateAccount);
//     map('/profile', Profile);
//     map('/update-profile', UpdateProfile);
//   }
// }
const App = props => {
    return (
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/create-account' component={CreateAccount}/>
            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/update-profile' component={UpdateProfile}/>
        </Switch>
    )
}

export default App;
