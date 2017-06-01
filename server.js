'use strict';
const path = require('path');
const express = require('express');
var bodyParser = require('body-parser');
var users = require('./routes/users');

module.exports = {
    app: function() {
        const app = express();
        const indexPath = path.join(__dirname, 'index.html');
        const publicPath = express.static(path.join(__dirname, 'public'));

        app.use('/public', publicPath);
        app.use(bodyParser());
        app.use(bodyParser.urlencoded({extended: false}));

        app.use(function(req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

            // intercept OPTIONS method
            if ('OPTIONS' === req.method && req.hostname === 'localhost') {
                res.sendStatus(200);
            } else {
                next();
            }
        });
        app.use('/users', users);

        app.get('/', function(_, res) {
            res.sendFile(indexPath);
        });

        return app;
    }
};
