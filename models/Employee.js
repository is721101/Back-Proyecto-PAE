const { Schema,model } = require('mongoose');
const bcrypt = require('bcryptjs')
employeeSchema = new Schema({
    id:{type:Number,required:true},
    name: {type:String,required:true},
    lastname: {type:String,required:true},
    position: {type:String,required:true},
    salary: {type:Number,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true},
    urlImage:{type:String},
    role:[{
        ref:"Role",
        type:Schema.Types.ObjectId
    }]

},{
    timestamp:true,
    versionKey:false
})


employeeSchema.statics.encryptPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
}

employeeSchema.statics.comparePassword = async(password,receivedPassword) =>{
    return await bcrypt.compare(password,receivedPassword)
}


module.exports = model('Employee',employeeSchema);