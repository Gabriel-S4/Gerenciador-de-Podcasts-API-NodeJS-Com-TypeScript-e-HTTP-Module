# Nome do Aplicativo
Podcast Menager

### Descrição
Um app ao estilo netflix, aonde possa centralizar diferentes episódio podcasts separados por categorias

### Domínio
Podcasts feitos em vídeo

### Features
- Listar os episódios podcasts em sessões de categoria
    - [saúde, bodybuilder, mentalidade, humor]
- Filtrar episódios por nome de podcasts

## Como

#### Feature:
Listar os episódios podcasts em sessões de 

### Como vou implementar:
Vou retornar em uma api rest (json) para que consiga alimentar um frontend o 
nome do podcast, nome do episódio, imagem de capa, link, categorias

GET: retorna lista de episódios

response:

    ```js
    [
        {
            podcastName: "flow",
            episode: "CBUM - Flow #319",
            videoId: "pQSuQmUfS30",
            cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
            categories: ["saúde", "esporte", "bodybuilder"]
        },
                {
            podcastName: "flow",
            episode: "RUBENS BARRICHELO - Flow #339",
            videoId: "4KDGTdiOV4I",
            cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
            categories: ["esporte", "corrida"]
        },
    ]
    ```
