import { IUseCreate, IUser, IUserUpdateDto } from "../IUser";

export interface IUserRepository {
    createUser: (user: IUseCreate) => Promise<IUser>;
    getUser: (id: IUser["id"]) => Promise<IUser>;
    updateUser: (id: IUser["id"], user: IUserUpdateDto) => Promise<IUser>;
}