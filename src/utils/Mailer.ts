import { createTransport } from "nodemailer";
import { ParameterStore } from "./ParameterStore";
import { IMail } from "../models/Mail";
export class Mailer {
    private _transport;

    constructor() {
        this._transport = createTransport({
            service: ParameterStore.SERVICE_MAIL,
            auth: {
                user: ParameterStore.SERVICE_MAIL_USER,
                pass: ParameterStore.SERVICE_MAIL_PASSWORD
            }
        });
    }

    async sendMail(mail: IMail) {
        try {
            await this._transport.sendMail(mail);
            return true;
        } catch (error) {
            return false;
        }
    }
}