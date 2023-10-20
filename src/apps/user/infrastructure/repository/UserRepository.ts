import { injectable } from "inversify";
import { IUseCreate, IUser, IUserAuth, IUserLogin, IUserUpdateDto } from "../../domain/IUser";
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
            const err = error as any;
            if (err?.message.includes("ER_DUP_ENTRY")) {
                throw {
                    status: HttpStatusCode._DUPLICATE_RECORD,
                    message: HttpMessage._DUPLICATE_RECORD
                }
            }
            throw {
                status: HttpStatusCode._UN_PROCESSABLE_ENTITY,
                message: HttpMessage._UN_PROCESSABLE_ENTITY
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
    async updateUser(id: number, user: IUserUpdateDto): Promise<IUser> {
        try {
            const userFound = await this._userRepository.findOneByOrFail({ id });
            const newData = { ...userFound, ...user } as UserEntity;
            return await this._userRepository.save(newData);
        } catch (error) {
            throw {
                status: HttpStatusCode._NOT_FOUND,
                message: HttpMessage._NOT_FOUND
            };
        }
    };

    async getUserWithAut(id: number): Promise<IUserAuth> {
        try {
            const data = await this._userRepository.findOne({ where: { id }, relations: ["auth"]});
            if (!data) throw new Error();
            return data;
        } catch (error) {
            throw {
                status: HttpStatusCode._NOT_FOUND,
                message: HttpMessage._NOT_FOUND
            }
        }
    }

    async getUseValidated(user: IUserLogin): Promise<IUser> {
        try {
            const data = await this._userRepository.findOneByOrFail({ username: user.username, validated: true });
            return data;
        } catch (error) {
            throw {
                status: HttpStatusCode._NOT_FOUND,
                message: HttpMessage._NOT_FOUND
            }
        }
    };
    
}