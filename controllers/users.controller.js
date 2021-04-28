const usersCtrl = {}

const User = require('../models/User');

usersCtrl.getUsers = async (req,res) => {
    const users = await User.find();
    res.json(users);
}
 
usersCtrl.createUser = async (req,res) => {
    const newUser = new User(req.body);
    await newUser.save()
    res.send({message:"User created"})
}
usersCtrl.getUser = async(req,res) => {
    const user= await User.findOne({_id:req.params.id})
    res.send(user);
}
usersCtrl.editUser = async(req,res) => {
   await User.findByIdAndUpdate(req.params.id,req.body);
   res.json({status:'User Updated'});

}
usersCtrl.deleteUser = async (req,res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({status:'User Deleted'});  
}

module.exports = usersCtrl ;