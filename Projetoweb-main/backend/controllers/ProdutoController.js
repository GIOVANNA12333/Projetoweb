//IMPORTANDO MODEL PARA MONGODB DO CLIENTE
const Produto = require('../models/Produto')


module.exports = class ProdutoController{

    
    static async cadastrar(req, res){
        const sku =req.body.nome
        const marca = req.body.marca
        const descricao = req.body.descricao
        const preco = req.body.preco
        const dataFabricacao = req.body.dataFabricacao
    

        if(!sku){
            res.status(422).json({mensagem:"O codigo sku e obrigatorio"})
            return
        }
        if(!marca){
            res.status(422).json({mensagem:"a marca e obrigatorio"})
            return
        }
        if(!descricao){
            res.status(422).json({mensagem:"A descrição e obrigatorio"})
            return
        }
        if(!preco){
            res.status(422).json({mensagem:"O preço e obrigatorio"})
            return
        }
        if(!dataFabricacao){
            res.status(422).json({mensagem:"datafrabicacao obrigatoria"})
            return
        }

        
        const ProdutoExiste = await Produto.findOne({email:email})

        if (ProdutoExiste){
            res.status(422).json({mensagem: "Produto ja cadastrado"})
            return
        }

        
        const Produto = new Produto({sku,marca,descricao,
            preco,dataFabricacao})

        try{
            const novoProduto = await Produto.save()
        } catch (error){
            res.status(500).json({mensagem: erro})
        }
    } /* Fim do metodo cadastrar*/
    static async buscarTodos(req,res){
        const Produto = await Produto.find().sort('-createdAt')
        res.status(200).json({
            produtos: produtos
        })
    }
}
