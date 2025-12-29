import { FilterPodcastModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcast-repository"
import { HttpStatus } from "../utils/http-status";

export const serviceFilterEpisodes = async (url: string | undefined):Promise<FilterPodcastModel> => {

    // interface de retorno
    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: [],
    }

    // BUSCA OS DADOS
    // ele divide a url em duas partes, e pega segunda, que é a parte pós parâmetro ex: (podpah, flow)
    const queryString = url?.split("?p=")[1] || "";
    // chama a função repositoryPodcast passando o parâmetro pedido pelo front, e retorna o resultado já filtrado
    const data = await repositoryPodcast(queryString);

    // verifica o conteúdo
    responseFormat.statusCode = data.length !== 0 ?  HttpStatus.OK : HttpStatus.NO_CONTENT

    // Outra forma de verificar de forma mais legível
    // if (data.length !== 0) {
    //     responseFormat.statusCode = HttpStatus.OK
    // } else {
    //     responseFormat.statusCode = HttpStatus.NO_CONTENT
    // }
    responseFormat.body = data
    console.log(data)
    return responseFormat
}