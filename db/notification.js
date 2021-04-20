const mongoose = require('./mongo');
const {
    mongo
} = require('mongoose')

const NotificationSchema = mongoose.Schema({
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
NotificationSchema.statics.SaveNotif = async (newNotif)=>{
  let n = notificacion(newNotif);
  let doc = await n.save();
  return doc;
}
NotificationSchema.statics.ServirNotif=async(id)=>{
  let x=await notificacion.findOne({_id:id}).lean();
  x.tomado=true;
  let updated ={}
  try {
    updated = await notificacion.findByIdAndUpdate(
          x._id, 
          {$set: x},
          {new: true, useFindAndModify: false}
        );
  } catch (error) {
      console.log(error)
  }
return updated;
}
module.exports = notificacion = mongoose.model('notificaciones', NotificationSchema);