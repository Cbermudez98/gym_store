import express, { Application } from "express";
import cors from "cors";
import { ParameterStore } from "../../utils/ParameterStore";
import { Log } from "../../helpers/Logs";

import User from "./../../apps/user/ApiRouter";

export class Server {
    private _app: Application;
    constructor(application: Application) {
        this._app = application;
    }

    public init(): void {
        this._app.set("PORT", ParameterStore.PORT);
        this.loadMiddlewares();
        this.loadRoutes();
        this.listen();
    }

    private loadMiddlewares(): void {
        this._app.use(cors());
        this._app.use(express.json());
    }

    private loadRoutes(): void {
        this._app.use("/user", User.register())
    }

    private listen(): void {
        this._app.listen(this._app.get("PORT"), () => {
            Log.info(`Server running at http://localhost:${this._app.get("PORT")}`)
        });
    }
}