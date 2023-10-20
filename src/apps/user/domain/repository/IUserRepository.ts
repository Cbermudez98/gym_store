import { IUseCreate, IUser, IUserAuth, IUserLogin, IUserUpdateDto } from "../IUser";

export interface IUserRepository {
    createUser: (user: IUseCreate) => Promise<IUser>;
    getUser: (id: IUser["id"]) => Promise<IUser>;
    getUserWithAut(id: IUser["id"]): Promise<IUserAuth>;
    updateUser: (id: IUser["id"], user: IUserUpdateDto) => Promise<IUser>;
    getUseValidated: (user: IUserLogin) => Promise<IUser>;
}