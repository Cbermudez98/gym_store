import { IUseCreate, IUser, IUserAuth, IUserLogin, IUserUpdateDto } from "../IUser";

export interface IUserUseCase {
    save: (user: IUseCreate) => Promise<IUser>;
    update: (id: IUser["id"], user: IUserUpdateDto) => Promise<IUser>;
    get: (id: IUser["id"]) => Promise<IUser>;
    getWithAuth: (id: IUser["id"]) => Promise<IUserAuth>;
    login: (user: IUserLogin) => Promise<IUser>;
}