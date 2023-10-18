import { ResponseModel } from "../../../../models/ResponseModel";
import { IUseCreate, IUser, IUserUpdateDto } from "../IUser";

export interface IUserController {
    createUser: (user: IUseCreate) => Promise<ResponseModel>;
    updateUser: (id: IUser["id"], user: IUserUpdateDto) => Promise<ResponseModel>;
    getUser: (id: IUser["id"]) => Promise<ResponseModel>;
}