import { FilterPodcastModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcast-repository";
import { HttpStatus } from "../utils/http-status";

export const serviceListEpisodes = async () => {

    // interface de retorno
    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: [],
    }

    // chama a função repositoryPodcast sem passas parâmetros, e como o parâmetro é opcional lá, ele trás a lista inteira, sem filtrar
    const data = await repositoryPodcast();

    responseFormat.statusCode = data.length !== 0 ? HttpStatus.OK : HttpStatus.NO_CONTENT
    responseFormat.body = data

    return responseFormat;
}