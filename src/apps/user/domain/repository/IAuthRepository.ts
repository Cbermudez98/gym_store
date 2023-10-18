import { IAuth, IAuthCreate } from "../IAuth";

export interface IAuthRepository {
    createAuth: (auth: IAuthCreate) => Promise<IAuth>;
    updateAuth: (id: IAuth["id"]) => Promise<boolean>;
}