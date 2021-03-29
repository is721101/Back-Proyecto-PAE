const mongoose = require('./mongo');
const {
    mongo
} = require('mongoose')

const MesaSchema = mongoose.Schema({
  id:{
    type:Number
  },
  nombre:{
    type:String,

  },
  activo:{
    type:Number,
  },
  pedido:[{
        platillo: String,
        cantidad:Number,
        precio:Number,
        mesa:String,
        tomado:Number
    }] 
  
})

module.exports = MesaSchema;