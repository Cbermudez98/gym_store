import { container } from "./../../helpers/container/Container";
import { Request, Response, Router } from "express";
import { RouterModel } from "../../models/RouterModel";
import { RouterHandler } from "../../helpers/ResponseHandler";
import { ObjectValidatorMiddleware } from "../../middlewares/ObjectValidator";
import { userCreateSchemaDto, userUpdateSchemaDto } from "./infrastructure/schemas/UserSchema";
import { Types } from "../../helpers/container/Types";
import { IUserController } from "./domain/controller/IUserController";
import { UserController } from "./infrastructure/controller/UserController";
import { UserRole } from "./domain/IUser";
import { ValidateParams } from "../../middlewares/ValidateParams";
import { JwtSchema } from "./infrastructure/schemas/JwtSchema";
import { AuthRole } from "../../middlewares/AuthRole";

class User implements RouterModel {
    private _userController: IUserController = container.get<UserController>(Types.UserController);
    private _route: Router;
    constructor() {
        this._route = Router();
    }

    register(): Router {
        this._route.get("/:id", AuthRole.validate(UserRole.User), (req: Request, res: Response) => {
            RouterHandler.manage(this._userController.getUser(Number(req.params.id)), req, res);
        });
        
        this._route.post("/", ObjectValidatorMiddleware.validate(userCreateSchemaDto), (req: Request, res: Response) => {
            RouterHandler.manage(this._userController.createUser({ ...req.body, role: UserRole.User }), req, res);
        });

        this._route.post("/admin", ObjectValidatorMiddleware.validate(userCreateSchemaDto), (req: Request, res: Response) => {
            RouterHandler.manage(this._userController.createUser({ ...req.body, role: UserRole.ADMINISTRATOR }), req, res);
        });

        this._route.post("/confirmation/:jwt", ValidateParams.validateJwt(), ObjectValidatorMiddleware.validate(JwtSchema), (req: Request, res: Response) => {
            RouterHandler.manage(this._userController.confirmUser(req.body), req, res);
        });

        this._route.patch("/:id", AuthRole.validate(UserRole.User), ObjectValidatorMiddleware.validate(userUpdateSchemaDto), (req: Request, res: Response) => {
            RouterHandler.manage(this._userController.updateUser(Number(req.params.id), req.body), req, res);
        });
        return this._route;
    }
}

export default new User();