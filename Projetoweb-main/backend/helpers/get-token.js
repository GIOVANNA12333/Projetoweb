// CRIADO A APARTIR DA AULA DE 25/07/2024
const getToken = (req) =>{
    const autHeader = req.headers.autorização
    const Token = autHeader.split("")[1]
    return Token
}

module.exports = getToken