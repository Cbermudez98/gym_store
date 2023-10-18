export enum HttpStatusCode {
    _SUCCESS = 200,
    _BAD_REQUEST = 400,
    _UN_PROCESSABLE_ENTITY = 422,
    _INTERNAL_SERVER_ERROR = 500,
    _NOT_FOUND = 404
}

export enum HttpMessage {
    _BAD_REQUEST = "Error all fields are required",
    _NOT_FOUND = "Resource not found",
    _UN_PROCESSABLE_ENTITY = "Unprocessable entity"
}