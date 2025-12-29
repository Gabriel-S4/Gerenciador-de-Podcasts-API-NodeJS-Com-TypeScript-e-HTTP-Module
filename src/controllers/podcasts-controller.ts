import {IncomingMessage, ServerResponse} from 'http'
import { serviceListEpisodes } from '../services/list-episodes-service'
import { serviceFilterEpisodes } from '../services/filter-episodes-service'
import { ContentType } from '../utils/content-type'

export const getListEpisodes = async (req:IncomingMessage, res: ServerResponse) => {

    // Chama a função que retorna o content
    const content = await serviceListEpisodes()
    // Cria o cabeçalho da resposta, se for 200 (deu certo) retorna no formato json
    res.writeHead(content.statusCode, { 'content-type': ContentType.JSON });
    // Termina enviando o conteúdo em json
    res.end(JSON.stringify(content.body));
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    // exemplo de url com queryParams: http://localhost:3636/api/episode?p=flow

    // Chama a função com parâmetro da url da requisição, que retorna o content
    const content = await serviceFilterEpisodes(req.url)
    // Cria o cabeçalho da resposta, se for 200 (deu certo) retorna no formato json
    res.writeHead(content.statusCode, { 'content-type': "application/json" });
    // Termina enviando o conteúdo em json
    res.end(JSON.stringify(content.body));
}