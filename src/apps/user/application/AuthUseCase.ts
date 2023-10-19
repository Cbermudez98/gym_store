import { inject, injectable } from "inversify";
import { IAuthUseCase } from "../domain/application/IAuthUseCase";
import { IAuthCreate, IAuth } from "../domain/IAuth";
import { Types } from "../../../helpers/container/Types";
import { IAuthRepository } from "../domain/repository/IAuthRepository";

@injectable()
export class AuthUseCase implements IAuthUseCase {
    constructor(@inject(Types.AuthRepository) private _authRepository: IAuthRepository) {}

    async add(auth: IAuthCreate): Promise<IAuth> {
        try {
            return await this._authRepository.createAuth(auth);  
        } catch (error) {
            throw error;
        }
    };

    async update(id: number): Promise<boolean> {
        try {
            return await this._authRepository.updateAuth(id);
        } catch (error) {
            throw error;
        }
    };
}