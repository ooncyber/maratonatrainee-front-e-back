const express = require('express');

const server = express();
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.post('/', (req, res) => {
    const pessoa1 = req.body.pessoa1
    const idade1 = req.body.idade1

    
    res.send(`Seja bem vindo ${req.body.nome} ${req.body.sobrenome}`)
})

server.listen(8080)