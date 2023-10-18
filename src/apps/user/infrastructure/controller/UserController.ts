import { Types } from "../../../../helpers/container/Types";
import { ResponseModel } from "../../../../models/ResponseModel";
import { HttpStatusCode } from "../../../../models/enum";
import { Bcrypt } from "../../../../utils/Bcrypt";
import { IUseCreate, IUser, IUserUpdateDto } from "../../domain/IUser";
import { IUserUseCase } from "../../domain/application/IUserUseCase";
import { IUserController } from "../../domain/controller/IUserController";
import { inject, injectable } from "inversify";

@injectable()
export class UserController implements IUserController {
    constructor(@inject(Types.UserUseCase) private _userUseCase: IUserUseCase) {
        
    }
    async createUser(user: IUseCreate): Promise<ResponseModel> {
        try {
            const password = new Bcrypt().encrypt(user.password);
            const data = await this._userUseCase.save({ ...user, password });
            return {
                status: HttpStatusCode._SUCCESS,
                data
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