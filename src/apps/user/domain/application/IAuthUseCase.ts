import { IAuth, IAuthCreate } from './../IAuth';
export interface IAuthUseCase {
    add: (auth: IAuthCreate) => Promise<IAuth>
    update: (id: IAuth["id"]) => Promise<boolean>
}