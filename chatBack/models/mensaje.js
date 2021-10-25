//Servirá para manejar el historial del chat
const {Schema, model} = require ('mongoose')

const mensajeSchema = Schema({
    de:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    para:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    mensaje:{
        type: String,
        required: true
    },
},{
    timestamps:true //para mostrar la fecha de creación y de ultima modificación
})

mensajeSchema.method('toJSON', function(){
    const {_v,  ...object } =this.toObject()
    return object
})

module.exports = model('Mensaje', mensajeSchema)