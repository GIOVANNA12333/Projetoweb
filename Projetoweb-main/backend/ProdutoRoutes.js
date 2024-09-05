const router = require('express').Router()

const ProdutoController =
require('../controllers/ProdutoController')

router.get('/',ProdutoController.buscarTodos)
router.post('/novoProduto', 
    ProdutoController.cadastrar)

module.exports = router