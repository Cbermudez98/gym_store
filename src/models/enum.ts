export enum HttpStatusCode {
    _SUCCESS = 200,
    _BAD_REQUEST = 400,
    _FORBIDDEN = 403,
    _DUPLICATE_RECORD = 409,
    _UN_PROCESSABLE_ENTITY = 422,
    _INTERNAL_SERVER_ERROR = 500,
    _NOT_FOUND = 404
}

export enum HttpMessage {
    _BAD_REQUEST = "Error all fields are required",
    _NOT_FOUND = "Resource not found",
    _UN_PROCESSABLE_ENTITY = "Unprocessable entity",
    _DUPLICATE_RECORD = "Duplicate record",
    _FORBIDDEN = "Not allowed",
    _PASSWORD_NOT_MATCH = "Password not match"
}