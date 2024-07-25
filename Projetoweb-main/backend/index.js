const express= require('express')
const cors = requre ('cores')
const app= express()
const ClienteRoutes = require ("./routes/ClienteRoutes")

//configuração de resposta
app.use(express.json())
app.use(cors({credentials: true, origin:'http://localhost:3000'}))

app.use(express.static('public'))

/* habilitar uso de rotas pelo express */
app.use('/clientes', ClienteRoutes)

AudioParamMap.listen(5000)
