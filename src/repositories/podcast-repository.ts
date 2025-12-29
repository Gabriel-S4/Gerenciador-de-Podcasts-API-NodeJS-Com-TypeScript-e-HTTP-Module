import fs from 'fs'
import path from 'path'
import { PodcastModel } from '../models/podcast-model'
// pega o path do arquivo podcast.json dinamicamente
const pathData =  path.join(__dirname, "../repositories/podcast.json")

// o ? de podcastName? deixa ele ser opcional, se o parâmetro não existir ele puxa a função de listar, se existir, a de filtrar.
export const repositoryPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
    // lê o arquivo com a rota do pathData usando o utf-8 como opção
    const rawData = fs.readFileSync(pathData, "utf-8")
    // cria a variável jsonFile que tem o rawData que é json convertido para objeto
    let jsonFile = JSON.parse(rawData)

    // se o parâmetro podcastName existir, ele filtra o nome e trás o resultado já filtrado
    if(podcastName){
        jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName)
    }

    return jsonFile
}