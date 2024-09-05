const express= require('express')
const cors = require ('cors')
const app= express()
const ClienteRoutes = require ("./routes/ClienteRoutes")
const ProdutoRoutes = require ("./routes/ProdutoRoutes")

//configuração de resposta
app.use(express.json())
app.use(cors({credentials: true, origin:'http://localhost:3000'}))

app.use(express.static('public'))


/* habilitar uso de rotas pelo express */
app.use('/produtos',ProdutoRoutes)
app.use('/clientes', ClienteRoutes)
app.listen(5000)
