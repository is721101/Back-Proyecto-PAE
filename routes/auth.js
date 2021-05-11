const express = require('express');
const passport = require('passport'); 
const router = express.Router();
const usuario = require('../db/employee');


//Regresa si está loggeado o no



router.get('/', (_, res) => {
    res.send({status: 200, message: 'Logged correctly'});
  });
module.exports = router;