const { Schema,model } = require('mongoose');

userSchema = new Schema({
    name: {type:String,required:true},
    lastname: {type:String,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true},
    birthdate:{type:String}
},{
    timestamp:true,
    versionKey:false
})

module.exports = model('User',userSchema);