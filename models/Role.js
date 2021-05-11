const { Schema,model } = require('mongoose');

roleSchema = new Schema({
    name:String,

},{
    versionKey:false
})

module.exports = model('role',roleSchema);