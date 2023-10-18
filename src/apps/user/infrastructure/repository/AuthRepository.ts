import { injectable } from "inversify";
import { IAuthRepository } from "../../domain/repository/IAuthRepository";
import { IAuthCreate, IAuth } from "../../domain/IAuth";
import { Repository } from "typeorm";
import { appDataSource } from "../../../../config/typeorm/config";
import { AuthEntity } from "../entity/Auth.entity";
import { HttpStatusCode, HttpMessage } from './../../../../models/enum';

@injectable()
export class AuthRepository implements IAuthRepository {
    private _authRepository: Repository<AuthEntity>;

    constructor() {
        this._authRepository = appDataSource.getRepository(AuthEntity);
    }

    async createAuth(auth: IAuthCreate): Promise<IAuth> {
        try {
            const data = await this._authRepository.save(auth);
            return data;
        } catch (error) {
            throw {
                status: HttpStatusCode._UN_PROCESSABLE_ENTITY,
                message: HttpMessage._UN_PROCESSABLE_ENTITY
            }
        }
    };

    async updateAuth(id: number): Promise<boolean> {
        try {
            await this._authRepository.save({ id, verified: true });
            return true;
        } catch (error) {
            throw {
                status: HttpStatusCode._NOT_FOUND,
                message: HttpMessage._NOT_FOUND
            }
        }
    };
}