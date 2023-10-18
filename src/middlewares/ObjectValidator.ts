import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";
import { HttpMessage, HttpStatusCode } from "../models/enum";

export class ObjectValidatorMiddleware {
    public static validate(schema: Schema) {
        return (req: Request, res: Response, next: NextFunction) => {
            const body = req?.body || {};
            const { error } = schema.validate(body);
            if (error) {
                res.status(HttpStatusCode._BAD_REQUEST).send({ error: HttpMessage._BAD_REQUEST });
            } else {
                next();
            }
        };
    }
}