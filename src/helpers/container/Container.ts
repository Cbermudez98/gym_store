import { Container } from "inversify";
import { Types } from "./Types";
import { IUserController } from "../../apps/user/domain/controller/IUserController";
import { UserController } from "../../apps/user/infrastructure/controller/UserController";
import { IUserUseCase } from "../../apps/user/domain/application/IUserUseCase";
import { UserUseCase } from "../../apps/user/application/UserUseCase";
import { IUserRepository } from "../../apps/user/domain/repository/IUserRepository";
import { UserRepository } from "../../apps/user/infrastructure/repository/UserRepository";
import { IAuthUseCase } from "../../apps/user/domain/application/IAuthUseCase";
import { IAuthRepository } from "../../apps/user/domain/repository/IAuthRepository";
import { AuthRepository } from "../../apps/user/infrastructure/repository/AuthRepository";
import { AuthUseCase } from "../../apps/user/application/AuthUseCase";

const container = new Container();

container.bind<IUserController>(Types.UserController).to(UserController);
container.bind<IUserUseCase>(Types.UserUseCase).to(UserUseCase);
container.bind<IUserRepository>(Types.UserRepository).to(UserRepository);
container.bind<IAuthRepository>(Types.AuthRepository).to(AuthRepository);
container.bind<IAuthUseCase>(Types.AuthUseCase).to(AuthUseCase);

export { container };