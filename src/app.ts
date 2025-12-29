import * as http from "http"

import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller'
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";
// Função que vai ficar dentro de http.createServer()
export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

    // queryString (texto para consulta)
    // http://localhost:3636/api/episode?p=flow
    // const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];
    const baseUrl = request.url?.split("?")[0]

    // Listar podcasts
    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response)
    }
    // filtrar podcast pelo nome
    if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response)
    }
}