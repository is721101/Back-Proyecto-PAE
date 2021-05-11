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