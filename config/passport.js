const passport =require("passport")
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
    console.log("se mete a serializeUser")
});
  
passport.deserializeUser(function(user, done) {
    //User.findById(id, function(err, user) {
      //done(err, user);
    //});
    console.log("se mete a deserializeUser con el usuario: "+ user.GoogleID)
    //const user = users.find(id)  .then(user => done(null,user));
    done(null,user)
  });


passport.use(
    new GoogleStrategy(
    {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/"
  },
  function(accessToken, refreshToken, profile, done) {
   
    var myUser={"TimeStamp":Date.now(),
                "GoogleID":profile.id,
                "email":profile.emails[0].value,
                "imageURL":profile.photos[0].value,
                "name":profile.displayName}
    //usuarios.users.push(myUser)
    console.log(profile)
    done(null,myUser);
  }
));