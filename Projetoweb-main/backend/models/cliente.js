 const mongoose =require('../db/conecta')
 const {schema} = mongoose

 const Cliente = mongoose.model('cliente',
 new schema({
    nome :{type:String, required: true},
    email :{type:String, required: true},
    senha :{type:String, required: true},
    telefone : {type:String, required: true}
 },
 {timestamps:true}
 ))

 module.exports=Cliente
