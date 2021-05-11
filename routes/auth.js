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
const usuario = require('../db/employee');


//Regresa si está loggeado o no



router.get('/', (_, res) => {
    res.send({status: 200, message: 'Logged correctly'});
  });
module.exports = router;
