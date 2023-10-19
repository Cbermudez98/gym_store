export interface IJwtRequest {
    role: string;
    uid: number;
    iat: number;
    exp: number;
}