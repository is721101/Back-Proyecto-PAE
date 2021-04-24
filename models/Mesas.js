const { Schema,model } = require('mongoose');


mesaSchema = new Schema({
    id: {type:Number,required:true},
    activo: {type:Boolean,required:true},
    codigo: {type:String,required:true},
},{
    timestamp:true,
    versionKey:false
})

module.exports = model('mesa',mesaSchema);


