const express = require('express');
const router = express.Router();
const PlatilloSchema = require('../DB/platillos');
const mongoose = require('mongoose');
const MesaSchema = require('../db/mesa');
const NotificationSchema = require('../DB/notification');




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
    table.findOneAndUpdate({"id":mesa},{$push:{pedido:pedidoHecho}},{
        new:true
    }).then(e=>{
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
    table.findOne({id:id}).lean().then(e=>{
        //console.log(e.pedido)
        pedidos=e.pedido
        res.send(pedidos)
    })
    
})





router.get("/validate/:id/:mesa",(req,res)=>{
    let contra=req.params.id
    let mesa=req.params.mesa
    if(contra){
        let table= mongoose.model('mesas',MesaSchema);
        table.findOne({"id":mesa,"codigo":contra}).then(e=>{
            if(e){
                res.send("pasa")
            }else{
                res.send("false")
            }
        })
    }
    
})

router.get("/verify/:id/:mesa", (req, res) => {
    let logged = false
    let contra = req.params.id
    let mesa = req.params.mesa
    if (mesa && contra) {
        let table = mongoose.model('mesas', MesaSchema);
        table.findOne({ "id": mesa, "codigo": contra, "activo": 1 }).then(e => {
            if (e) {
                res.send("true")
            } else {
                res.send("false")
            }

        })
    }else{
        res.send("false")
    }
    

})


module.exports = router;