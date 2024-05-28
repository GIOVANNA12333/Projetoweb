const Cliente = require('../models/cliente')
const bcrypt = require ('bcrypt')

module.exports = class ClienteController{
    static async registrar(req,  res){
        const nome =req.body.nome
        const email =req.body.email
        const telefone =req.body.telefone
        const senha =req.body.senha
        const senhaconf =req.body.senhaconf

        if(!nome){
            res.status(422).json({mensagem:"O nome e obrigatorio"})
            return
        }
        if(!email){
            res.status(422).json({mensagem:"O email e obrigatorio"})
            return
        }
        if(!senha){
            res.status(422).json({mensagem:"O senha e obrigatorio"})
            return
        }
        if(!telefone){
            res.status(422).json({mensagem:"O telefone e obrigatorio"})
            return
        }
        if(!senhaconf){
            res.status(422).json({mensagem:"senhaconf obrigatoria"})
            return
        }

}








}