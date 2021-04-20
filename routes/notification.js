const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const NotificationSchema = require('../DB/notification');
const shortid=require('shortid')

router.post("/",async(req,res)=>{
    let newNotif={
        mesa:req.body.mesa,
        tipo:req.body.tipo,
        tomado:false
        
    };
    console.log("Insertando: ");
    console.log(newNotif);
    let resp=await NotificationSchema.SaveNotif(newNotif);
    if(resp){
        res.status(201).send(resp);
    }
    else{
        res.status(401).send("Error");
    }
})

router.get("/",async(req,res)=>{
    let resp=await NotificationSchema.find({tomado:false}).lean();
    console.log(resp);
    if(resp){
        res.status(201).send(resp)
    }
    else{
        res.status(401).send("Notificaciones no encontradas");
    }
})
router.put("/", async(req,res)=>{
    let id=req.body.id;
    let resp=await NotificationSchema.ServirNotif(id);
    if(resp){
        res.status(201).send(resp)
    }
    else{
        res.status(401).send("Notificaciones no encontradas");
    }
})
module.exports = router;