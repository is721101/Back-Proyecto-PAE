const mongoose = require('./mongo');
const {
    mongo
} = require('mongoose')

const NotificationSchema = mongoose.Schema({
  id:{
    type:Number
  },
  mesa:{
    type:String,

  },
  tipo:{
    type:String,
  },
  tomado:{
    type:Boolean
  },

})

module.exports = NotificationSchema;