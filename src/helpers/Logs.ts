import { ILogObj, Logger } from "tslog";

class LoggerService {
    private _logger: Logger<ILogObj>;
    constructor() {
        this._logger = new Logger({
            type: "pretty"
        });
    }

    public info(...args: unknown[]) {
        this._logger.info(...args);
    }

    public warn(...args: unknown[]) {
        this._logger.warn(...args);
    }

    public error(...args: unknown[]) {
        this._logger.error(...args);
    }
}

export const Log = new LoggerService();