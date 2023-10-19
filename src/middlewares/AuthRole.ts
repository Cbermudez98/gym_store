import { NextFunction, Request, Response } from "express";
import { HttpMessage, HttpStatusCode } from "../models/enum";
import { Jwt } from "../utils/Jwt";
import { IJwtRequest } from "../apps/user/domain/IJwtRequest";

export class AuthRole {
    static validate(...roles: String[]) {
        return (req: Request, res: Response, next: NextFunction) => {
            try {
                const authorization = req.headers?.authorization?.split(" ")[1] || "";
                if (!authorization) {
                    throw new Error();
                }
                const jwt = new Jwt();
                const valid: IJwtRequest = jwt.verify(authorization) as IJwtRequest;
                const role = valid.role;
                if (roles.includes(role)) {
                    next();
                } else {
                    throw new Error();
                }
            } catch (error) {
                res.status(HttpStatusCode._FORBIDDEN).send({ error: HttpMessage._FORBIDDEN });
            }
        };
    };
}