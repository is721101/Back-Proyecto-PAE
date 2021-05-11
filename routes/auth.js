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
 
router.get('/login', async function(req, res) {
    res.render('login' );
});


router.get('/logout',(req, res)=> {
    req.logout();
    req.session=null;
    res.redirect('/auth/login');
});
 
router.get('/google', passport.authenticate('google', 
    { scope: ['profile', 'email'] })
); 
 
router.get('/google/callback',
    passport.authenticate('google',{failureRedirect:'/login'}),
    function(req,res){
        // print req.query.code 
        console.log(req.user);
        // Successful authentication, redirect home. 
        res.redirect('/profile');
    }
)

 
module.exports = router;
>>>>>>> 387933e8ec63499bc1d02e0f80a26e88eb311b4a
