export enum ContentType {
    // JSON / Texto
    JSON = "application/json",
    TEXT = "text/plain",
    HTML = "text/html",
    XML = "application/xml",

    // Formularios
    FORM_URLENCODED = "application/x-www-form-urlencoded",
    FORM_DATA = "multipart/form-data",

    // Arquivos
    PDF = "application/pdf",
    ZIP = "application/zip",

    // Imagens
    JPEG = "image/jpeg",
    PNG = "image/png",
    GIF = "image/gif",
    SVG = "image/svg+xml",
    WEBP = "image/webp",

    // Áudio e Vídeo
    MP3 = "audio/mpeg",
    MP4 = "video/mp4",
    WEBM = "video/webm",

    // Outros / binários
    OCTET_STREAM = "application/octet-stream",
}