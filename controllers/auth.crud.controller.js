const authCRUDCtrl = {}

const e = require('cors');
const { JsonWebTokenError } = require('jsonwebtoken');
const Employee = require('../models/Employee');
const Role = require('../models/Role');
const jwt = require('jsonwebtoken')
 

authCRUDCtrl.signUp = async (req,res) => {
    const {id,name,lastname,position,salary,email,password,urlImage,role} = req.body;

    const newEmployee = new Employee({
        id,
        name,
        lastname,
        position,
        salary,
        email,
        password:await Employee.encryptPassword(password),
        urlImage,
    })

    if(role){
        const foundRoles = await Role.find({name:{$in:role}})
        newEmployee.roles = foundRoles.map(role => role._id)
    } 

    const savedEmployee= await newEmployee.save();
    console.log(savedEmployee)
 
    const token = jwt.sign({id:savedEmployee._id},process.env.SECRET,{
        expiresIn:86400
    })

    res.status(200).json({token})


  

    
}
authCRUDCtrl.signIn = async (req,res) => {
    const employeeFound = await Employee.findOne({email : req.body.email}).populate("roles")

    if(!employeeFound) return res.status(400).json({message:"Employee not found"});

    const matchPassword = await Employee.comparePassword(req.body.password,employeeFound.password);

    if(!matchPassword) return res.status(401).json({token:null,message:'Invalid password'})

    const token = jwt.sign({id:employeeFound._id},process.env.SECRET,{
        expiresIn:86400
    })

    res.json({token})
}


module.exports = authCRUDCtrl ;