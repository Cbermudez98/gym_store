import { Request, Response, Router } from "express";
import { RouterModel } from "../../models/RouterModel";
import { AuthRole } from "../../middlewares/AuthRole";
import { UserRole } from "../user/domain/IUser";
import { ObjectValidatorMiddleware } from "../../middlewares/ObjectValidator";
import { addProductToCartSchema } from "./infrastructure/schema/ProductToCartSchema";

class Cart implements RouterModel {
    private _route: Router;
    constructor() {
        this._route = Router();
    }
    register(): Router {
        this._route.post("/:id", AuthRole.validate(UserRole.User),
        ObjectValidatorMiddleware.validate(addProductToCartSchema), (req: Request, res: Response) => {
            
        });
        return this._route;
    }
}

export default new Cart();