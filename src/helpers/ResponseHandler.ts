import { Request, Response } from "express";
import { ResponseModel } from "../models/ResponseModel";
import { Log } from "./Logs";

export class RouterHandler {
    public static manage(promise: Promise<ResponseModel>, req: Request, res: Response) {
        promise.then((data) => {
            res.status(data.status).json(data.data);
        }).catch((error) => {
            Log.error(error);
            res.status(error?.status).json({ error: error.message || "Internal server error" });
        })
    }
}