<<<<<<< HEAD
let express = require('express');
const passport=require('passport');
let router = express.Router();


router.get('/login',(req, res)=>{
    res.status(401).send("Usuario no reconocido");
})
router.get('/google', passport.authenticate('google', { scope: ['profile','email'] }),(req, res)=>{
    console.log("Entrando")
    res.status(401).send("Usuario no reconocido")}
    );

router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        console.log( req.query.code);
    }
   );


   module.exports = router;
=======
const express = require('express');
const passport = require('passport'); 
const router = express.Router();
const usuario = require('../db/employee');


//Regresa si está loggeado o no

<<<<<<< HEAD


router.get('/', (_, res) => {
    res.send({status: 200, message: 'Logged correctly'});
  });
module.exports = router;
=======
 
module.exports = router;
>>>>>>> 387933e8ec63499bc1d02e0f80a26e88eb311b4a
>>>>>>> eaaa15a067b29c493fa24d1d19c30cb51f88d891
