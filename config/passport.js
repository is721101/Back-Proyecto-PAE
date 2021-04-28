const passport = require('passport'); 
const GoogleStrategy = require('passport-google-oauth20').Strategy; 
const User = require('../models/User');

 
passport.serializeUser(function(user,done){
  done(null,user );
})

passport.deserializeUser(function(user,done){
  User.find({id:user.id}).then( user =>{
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
    async (accessToken, refreshToken, profile,email, done) =>{ 
      const newUser = {
        name: email.displayName,
        lastname: email.name.givenName,
        email: email.emails[0].value,
        password:'Qhedarty',
      }
      try{
          let user = await User.findOne({id:profile.id})
          if(user){
            done(null,user);
          }else{
            user = User.create(newUser).then(()=>{
              done(null,newUser);
            });
          }
        }catch(err){
          console.log(err);
        }
      }     
    ) 
  ); 