'use strict';
var db;
const MongoClient = require('mongodb').MongoClient;
var bcrypt = require('bcryptjs');
var exports = module.exports = {};

MongoClient.connect('mongodb://trevor:something@ds115071.mlab.com:15071/keystroke', (err, database) => {
    if (err) {
        console.log(database);
        return console.log('err', err);
    }
    db = database;
});

exports.createUser = (req, res) => {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(`${req.body.password}/\/`, salt, function(err, hash) {
            if (err) {
                console.log(err);
            }
            db.collection('users').find({email: req.body.email}).toArray((err, results) => {
                if (results.length === 0) {
                    db.collection('users').save({
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        password: hash,
                        description: req.body.description,
                        image: req.body.image
                    }, (err, results) => {
                        if (err) {
                            return console.log(err);
                        }
                        db.collection('users').find({email: req.body.email, password: hash}).toArray((err, results) => {
                            if (err) {
                                console.log(err);
                            }
                            res.json(results);
                        });
                    });
                } else {
                    res.json({user: true});
                }
            });
        });
    });
};

exports.updateUser = (req, res) => {
    db.collection('users').update({
        email: req.body.email
    }, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        description: req.body.description,
        image: req.body.image
    });
    res.json('updated');
};

exports.login = (req, res) => {
    console.log(req.body);
    if (req.body.password.trim().length !== 0 && req.body.email.trim().length !== 0) {
        db.collection('users').find({email: req.body.email}).toArray((err, results) => {
            if (err) {
                console.log(err);
            }
            if (req.body.password.length && results[0] !== undefined) {
                bcrypt.compare(`${req.body.password}/\/`, results[0].password, function(err, response) {
                    if (err) {
                        console.log(err);
                        res.json([]);
                    }
                    if (response) {
                        res.json(results);
                    } else {
                        res.json(['wrong password']);
                    }
                });
            }else{
                res.json(['results[0] == undefined']);
            }
        });
    } else {
        res.json(['password or email length < 1']);
    }
};

exports.getUser = (req, res) => {
    db.collection('users').find({email: req.params.email}).toArray((err, results) => {
        console.log(results);
        res.json(results);
        // send HTML file populated with quotes here
    });
};
