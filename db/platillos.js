const mongoose = require('./mongo');
const {
    mongo
} = require('mongoose')

const PlatilloSchema = mongoose.Schema({
  id:{
    type:Number
  },
  desciption:{
    type:String,

  },
  urlImage:{
    type:String,
  },
  name:{
    type:String,
  },
  price:{
    type:Number,
  },
  category:{
    type:String,
  }
})

module.exports = PlatilloSchema;