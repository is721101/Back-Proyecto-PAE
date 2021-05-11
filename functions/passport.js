const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const employees= require('../db/employee')
    passport.serializeUser(function (user, done) {
        done(null, user);
    });
   passport.deserializeUser(async function(user,done){
      employees.find({email:user.email}).then( user =>{
      done(null, user)
    })
   
  })

passport.use(
 new GoogleStrategy(
 {
 clientID: process.env.CLIENT_ID,
 clientSecret: process.env.CLIENT_SECRET,
 callbackURL: 'http://localhost:3000/auth/google/callback',
 },
 async function (accessToken, refreshToken, profile, done) {
    try{
        const newUser = {
             email:profile.emails[0].value,
           }
         
        const employee= await employees.findOne({email:newUser.email}).then(done(null,employee))
          }
    catch(err){
     console.log(err);
    }
 }
 )
);
