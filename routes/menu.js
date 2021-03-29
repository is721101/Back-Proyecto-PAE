const express = require('express');
const router = express.Router();
const PlatilloSchema = require('../DB/platillos');
const mongoose = require('mongoose');
const MesaSchema = require('../db/mesa');



router.get("/",(req,res)=>{
    let platos= mongoose.model('platillos',PlatilloSchema);
    let id=req.query.id

    platos.find({}).lean().then(platillo=>{
        platos.findOne({id}).lean().then(platilloSelected=>{
            res.send(platillo)
        })
    })
})

router.post("/pedido",(req,res)=>{
    let cantidad=req.body.amount
    let platillo=req.body.name
    let mesa=req.body.table
    let precio=req.body.price
    //console.log("El body es:     "+req.body.price)
    let pedidoHecho={
        cantidad,
        platillo,
        mesa,
        precio,
        tomado:0
    }

    let table= mongoose.model('mesas',MesaSchema);
    table.findOneAndUpdate({"nombre":mesa},{$push:{pedido:pedidoHecho}},{
        new:true
    }).then(e=>{
        console.log(e)
        res.send("Done")
    })
    //console.log(pedidoHecho)
    
    
    
    
    
    
    //table.update({nombre:mesa},{nombre:"Holaaaaa"})
    //console.log(update) {$push:{pedidos:platillo}}

    
})

router.get("/pedido/:id",(req,res)=>{
    let pedidos=[]
    let table= mongoose.model('mesas',MesaSchema);
    let id=req.params.id
    //console.log("el ID es" +id)
    table.findOne({nombre:id}).lean().then(e=>{
        //console.log(e.pedido)
        pedidos=e.pedido
        res.send(pedidos)
    })
    
})

module.exports = router;