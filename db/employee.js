const { Schema,model } = require('mongoose');

employeeSchema = new Schema({
    id:{type:Number,required:true},
    name: {type:String,required:true},
    lastname: {type:String,required:true},
    position: {type:String,required:true},
    salary: {type:Number,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true},
    urlImage:{type:String}
},{
    timestamp:true,
    versionKey:false
})

<<<<<<< HEAD
module.exports = employeeSchema;
=======
module.exports = model('employees',employeeSchema);
>>>>>>> eaaa15a067b29c493fa24d1d19c30cb51f88d891
