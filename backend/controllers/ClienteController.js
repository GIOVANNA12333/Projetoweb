const Cliente = require('../models/cliente')
const bcrypt = require ('bcrypt')
const criarClienteToken  = require('../helpers/cria-cliente-token')

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

        /*verifica se cliente esta cadastrado*/
        const clienteExiste = await Cliente.findOne({email:email})

        if (clienteExiste){
            res.status(422).json({mensagem: "email ja cadastrado"})
            return
        }

        /*Criação de senha */
        const salt = await bcrypt.genSalt(12)
        const senhaHash = await bcrypt.hash(senha,salt)

        /* Adicionando cliente ao bd */
        const cliente = new Cliente({nome,email,telefone,senha: senhaHash})

        try{
            const novoCliente = await criarClienteToken(novoCliente,req, res)
        } catch (error){
            res.status(500).json({mensagem: erro})
        }
    } /* Fim do metodo registrar*/
}

