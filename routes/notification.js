const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const NotificationSchema = require('../DB/notification');

router.post("/",(req,res)=>{
    let mesa=req.body.mesa
    let tipo=req.body.tipo
    console.log(req.body)
    console.log(tipo)
    let notification= mongoose.model('notificaciones',NotificationSchema);
    notification.insertMany({mesa,tipo})
    res.send("hecho")
})


module.exports = router;