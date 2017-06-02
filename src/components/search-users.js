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
    componentWillMount() {}
    render() {
        if (Array.isArray(this.state.users)) {
            return (
                <div>
                    <Navbar/>
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
