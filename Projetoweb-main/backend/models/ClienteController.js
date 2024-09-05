//IMPORTANDO MODEL PARA MONGODB DO CLIENTE
const Cliente = require('../models/cliente')
//IMPORTANDO MODULOS NECESSARIOS DO NODE
const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken')

// IMPORTANDO HELPERS
const criarClienteToken  = require('../helpers/cria-cliente-token')
const getToken = require('../helpers/get-token')

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
    //verifica ussuaruo
    static async verificaUsuario (req,res){
        let usuarioAtual

        console.log(req.headers.autorizacao)

        if(req.headers.autorizacao){
            const token = getToken(req)
            const decodificado = jwt.verify(token,'mysecret')
            usuarioAtual = await Cliente.findById(decodificado.id)
            usuarioAtual.senha = undefined 
            //segurança aqui:esvazia o retorno da senha
        } else{
            usuarioAtual= null
        }

        response.status(200).send(usuarioAtual)
    }
    /*metodo de login*/
    static async login (req,res){
        const {email, senha} = req.body
        if(!email){
            res.status(422).json({
                mansagem: "O e-mail é obrigatorio"})
                return
        }
        if(!senha){
            res.status(422).json({
                mensagem: "A senha é obrigatoria"})
                return
        }
        const Cliente = await Cliente.findOne({email: email})

        if(!Cliente){
            res.status(422).json({mensagem: "Usuario não encontrado! "})
            return
        }
        //VERIFICA SE SENHA CONFERE VOM SENHA REGISTRADA
        const verificaSenha=
        await bcrypt.compare(senha, Cliente.senha)
        if (!verificaSenha){
            res.status(422).json({mensagem:"Senha não confere"})
            return
        }
        await createUserToken(cliente,req,res)
    }

}

