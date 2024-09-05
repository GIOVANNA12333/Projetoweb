 const mongoose =Require('../db/conecta')
 const {Schema} = mongoose

 const Produto = mongoose.model('Produto',
 new Schema({
    sku :{type:String, required: true},
    marca :{type:String, required: true},
    descricao :{type:String, required: true},
    preco : {type: Number, required: true},
    datadefabricacao : {type:Date, required: true}
 },
 {timestamps:true}
 ))

 Module.exports = Produto
