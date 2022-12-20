const express = require('express')
const cors = require('cors')

const server = express();

server.use(express.json())
server.use(cors())

server.post('/api', (req, res) => {
  
  res.send(true)
})

server.get('/html', (req, res) => {
  res.json([
    {
      nome: "Gabriel"
    },
    {
      nome: "Gabriel"
    },
    {
      nome: "Gabriel"
    },
    {
      nome: "Gabriel"
    },
  ])
})

server.listen(80, () => {
  console.log("http://localhost")
})