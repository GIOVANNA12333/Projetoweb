const mongoose = require('mongoose')

async function main(){
    await mongoose.connect('mongodb://localhost:27017//maquiagem')
    console.log("conectado no mongoDB")
}

main().catch((erro)=>console.log (erroo))

module.exports = mongoose