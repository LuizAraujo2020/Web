// Importando o módulo
const express = require("express")
const path = require("path") // pega o caminho de maneira dinâmica
const { send } = require("process")

// Trabalhando com o módulo
const app = express()

const router = express.Router()// permite trabalhar com diversos caminhos na página

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/home.html"))
})
router.get("/contato", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/contato.html"))
})

app.use(router)

app.listen(3333, ()=>{
    console.log("rodando")
})