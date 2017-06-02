'use strict';
const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers-users');
console.log('controllers', controllers);

router.post('/create-user', controllers.createUser);

router.post('/login', controllers.login);

router.put('/update-user', controllers.updateUser);

router.get('/all-users', controllers.getAllUsers);

router.get('/:email', controllers.getUser);


module.exports = router;
