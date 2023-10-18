import { inject, injectable } from "inversify";
import fs from "fs";

import { MailBuilder } from "../../../../builder/MailBuilder";
import { Types } from "../../../../helpers/container/Types";
import { ResponseModel } from "../../../../models/ResponseModel";
import { HttpStatusCode } from "../../../../models/enum";
import { Bcrypt } from "../../../../utils/Bcrypt";
import { ParameterStore } from "../../../../utils/ParameterStore";
import { IUseCreate, IUser, IUserUpdateDto } from "../../domain/IUser";
import { IUserUseCase } from "../../domain/application/IUserUseCase";
import { IUserController } from "../../domain/controller/IUserController";
import { Jwt } from "../../../../utils/Jwt";
import { IAuthUseCase } from "../../domain/application/IAuthUseCase";
import { Mailer } from "../../../../utils/Mailer";

@injectable()
export class UserController implements IUserController {
    constructor(
        @inject(Types.UserUseCase) private _userUseCase: IUserUseCase,
        @inject(Types.AuthUseCase) private _authUseCase: IAuthUseCase) {
    }
    async createUser(user: IUseCreate): Promise<ResponseModel> {
        try {
            const password = new Bcrypt().encrypt(user.password);
            const data = await this._userUseCase.save({ ...user, password });
            const mail = new MailBuilder();
            mail.setFrom(ParameterStore.SERVICE_MAIL_USER);
            mail.setTo(user.email);
            mail.setSubject("Welcome to gym store");

            const jwt = new Jwt().sing({ role: user.role, uid:  1 });
            
            let file = fs.readFileSync("./src/statics/mail.html", "utf-8");
            const dataToChange: any = { name: `${user.name} ${user.last_name}`, url_confirmation: `${ParameterStore.URL_CONFIRMATION}/${jwt}`};
            for (let current in dataToChange) {
                const change = dataToChange[current];
                file = file.replace(`%${current}%`, change);
            }

            mail.setHtml(file);

            const auth = await this._authUseCase.add({
                jwt,
                url_confirmation: dataToChange.url_confirmation,
                user_id: data.id
            });

            await this._userUseCase.update(data.id, { ...data, auth: auth.id });

            const mailer = new Mailer();
            await mailer.sendMail(mail.build());

            return {
                status: HttpStatusCode._SUCCESS,
                data: data
            }
        } catch (error) {
            throw error;
        }
    };

    updateUser: (id: number, user: IUserUpdateDto) => Promise<ResponseModel>;

    async getUser(id: number): Promise<ResponseModel> {
        try {
            const data = await this._userUseCase.get(id);
            return {
                status: 200,
                data
            }
        } catch (error) {
            throw error;
        }
    };
}