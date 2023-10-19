import { config } from "dotenv";

config();

export abstract class ParameterStore {
    static readonly PORT = process?.env?.SERVER_PORT || 3000;
    static readonly DB_PORT = process?.env?.DB_PORT || 3000;
    static readonly DB_NAME = process?.env?.DB_NAME || "test";
    static readonly DB_USER = process?.env?.DB_USER || "test";
    static readonly DB_PASSWORD = process?.env?.DB_PASSWORD || "test";
    static readonly DB_DIALECT = process?.env?.DB_DIALECT || "test";
    static readonly DB_HOST = process?.env?.DB_HOST || "test";
    static readonly SERVICE_MAIL = process?.env?.SERVICE_MAIL || "test";
    static readonly SERVICE_MAIL_USER = process?.env?.SERVICE_MAIL_USER || "test";
    static readonly SERVICE_MAIL_PASSWORD = process?.env?.SERVICE_MAIL_PASSWORD || "test";
    static readonly URL_CONFIRMATION = process?.env?.URL_CONFIRMATION || "test";
    static readonly JWT = process?.env?.JWT || "test";
}