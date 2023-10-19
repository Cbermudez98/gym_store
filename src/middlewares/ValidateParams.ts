import { NextFunction, Request, Response } from "express";
import { Jwt } from "../utils/Jwt";
import { HttpMessage, HttpStatusCode } from "../models/enum";

export class ValidateParams {
    public static validateJwt() {
        return (req: Request, res: Response, next: NextFunction) => {
            try {
                const jwt = new Jwt();
                const param = req?.params?.jwt || "";
                const valid = jwt.verify(param);
                req.body = valid;
                next();
            } catch (error) {
                res.status(HttpStatusCode._BAD_REQUEST).send({ error: HttpMessage._BAD_REQUEST});
            }
        }
    }
}