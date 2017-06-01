'use strict';
var db;
const MongoClient = require('mongodb').MongoClient;
var exports = module.exports = {};

MongoClient.connect('mongodb://trevor:something@ds115071.mlab.com:15071/keystroke', (err, database) => {
    if (err) {
        console.log(database);
        return console.log('err', err);
    }
    db = database;
});

exports.createUser = (req, res) => {
    console.log('body', req.body);
    db.collection('users').find({email: req.body.email}).toArray((err, results) => {
        if (results.length === 0) {
            db.collection('users').save({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                description: req.body.description,
                image: req.body.image
            }, (err,results) => {
                if (err) {
                    return console.log(err);
                }
                db.collection('users').find({email: req.body.email, password: req.body.password}).toArray((err, results) => {
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
};

exports.updateUser = (req,res) => {
    db.collection('users').update(
        {
            email:req.body.email
        },
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            description: req.body.description,
            image: req.body.image
        }
    );
    res.json('updated');
};

exports.login = (req, res) => {
    console.log('body', req.body);
    db.collection('users').find({email: req.body.email, password: req.body.password}).toArray((err, results) => {
        console.log(results);
        res.json(results);
    });
};

exports.getUser = (req, res) => {
    db.collection('users').find({email: req.params.email}).toArray((err, results) => {
        console.log(results);
        res.json(results);
        // send HTML file populated with quotes here
    });
};
