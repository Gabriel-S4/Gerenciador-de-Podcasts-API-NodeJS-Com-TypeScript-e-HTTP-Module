import * as http from "http"
import { app } from './app'

// trás a função app de app.ts, onde fica a configuração dos métodos e das rotas
const server = http.createServer(app)

// durante o processo, captura o valor PORT de .env e atribui a port
const port = process.env.PORT
server.listen(port, () => {
    console.log(`servidor ligado na porta ${port}`)
})