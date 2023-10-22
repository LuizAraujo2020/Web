const http = require("http")

const hostname = "localhost"
const port = 3333

const server = http.createServer((req, res)=>{
    res.setHeader("Content-type", "text/plain")
    res.end("hello word")
})

server.listen(port, hostname, ()=>{
    process.stdout.write("SERVIDOR RODANDO")
})

console.log("Hello, World!")
console.log("Hello, World!3")