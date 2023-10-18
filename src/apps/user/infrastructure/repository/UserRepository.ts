import { injectable } from "inversify";
import { IUseCreate, IUser, IUserUpdateDto } from "../../domain/IUser";
import { IUserRepository } from "../../domain/repository/IUserRepository";
import { Repository } from "typeorm";
import { UserEntity } from "../entity/User.entity";
import { appDataSource } from "../../../../config/typeorm/config";
import { HttpMessage, HttpStatusCode } from "../../../../models/enum";

@injectable()
export class UserRepository implements IUserRepository {
    private _userRepository: Repository<UserEntity>;
    constructor() {
        this._userRepository = appDataSource.getRepository(UserEntity);
    }

    async createUser(user: IUseCreate): Promise<IUser> {
        try {
            const newUser = await this._userRepository.save(user);
            return newUser;
        } catch (error) {
            throw {
                status: HttpStatusCode._UN_PROCESSABLE_ENTITY,
                messagE: HttpMessage._UN_PROCESSABLE_ENTITY
            }
        }
    };
    async getUser(id: number): Promise<IUser> {
        try {
            const user = await this._userRepository.findOneByOrFail({ id });
            return user;
        } catch (error) {
            throw {
                status: HttpStatusCode._NOT_FOUND,
                message: HttpMessage._NOT_FOUND
            };
        }
    };
    updateUser: (id: number, user: IUserUpdateDto) => Promise<IUser>;
    
}