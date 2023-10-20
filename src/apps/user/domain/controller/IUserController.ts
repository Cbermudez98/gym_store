import { ResponseModel } from "../../../../models/ResponseModel";
import { IJwtRequest } from "../IJwtRequest";
import { IUseCreate, IUser, IUserLogin, IUserUpdateDto } from "../IUser";

export interface IUserController {
    createUser: (user: IUseCreate) => Promise<ResponseModel>;
    updateUser: (id: IUser["id"], user: IUserUpdateDto) => Promise<ResponseModel>;
    getUser: (id: IUser["id"]) => Promise<ResponseModel>;
    confirmUser: (jwt: IJwtRequest) => Promise<ResponseModel>;
    loginUser: (user: IUserLogin) => Promise<ResponseModel>;
}