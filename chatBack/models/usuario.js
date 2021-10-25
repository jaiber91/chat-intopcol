const {Schema, model} = require ('mongoose')

const usuarioSchema = Schema({
    nombre:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    online:{
        type: Boolean,
        default: false
    }
})

usuarioSchema.method('toJSON', function(){
    const {__v, __id, password, ...object } =this.toObject()
    object.uid = __id
    return object
})

module.exports = model('Usuario', usuarioSchema)