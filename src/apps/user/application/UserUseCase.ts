import { inject, injectable } from "inversify";
import { IUseCreate, IUser, IUserUpdateDto } from "../domain/IUser";
import { IUserUseCase } from "../domain/application/IUserUseCase";
import { Types } from "../../../helpers/container/Types";
import { IUserRepository } from "../domain/repository/IUserRepository";

@injectable()
export class UserUseCase implements IUserUseCase {
    constructor(@inject(Types.UserRepository) private _userRepository: IUserRepository) {}
    async save(user: IUseCreate): Promise<IUser> {
        try {
            const data = await this._userRepository.createUser(user);
            data.password = undefined as any;
            return data;
        } catch (error) {
            throw error;
        }
    };

    update: (id: number, user: IUserUpdateDto) => Promise<IUser>;
    async get(id: number): Promise<IUser> {
        try {
            const data = await this._userRepository.getUser(id);
            data.password = undefined as any;
            return data;
        } catch (error) {
            throw error;
        }
    };
}