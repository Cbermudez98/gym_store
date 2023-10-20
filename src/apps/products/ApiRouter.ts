import { Request, Response, Router } from "express";
import { RouterModel } from "../../models/RouterModel";
import { AuthRole } from "../../middlewares/AuthRole";
import { UserRole } from "../user/domain/IUser";
import { ObjectValidatorMiddleware } from "../../middlewares/ObjectValidator";
import { productCreateSchema, productUpdateSchema } from "./infrastructure/schema/ProductSchema";
import { RouterHandler } from "../../helpers/ResponseHandler";
import { IProductController } from "./domain/controller/IProductController";
import { container } from "../../helpers/container/Container";
import { Types } from "../../helpers/container/Types";

class Product implements RouterModel {
    private _route: Router;
    private _productController: IProductController;

    constructor() {
        this._productController = container.get(Types.ProductController);
        this._route = Router();
    }
    register(): Router {
        this._route.post("/", AuthRole.validate(UserRole.ADMINISTRATOR),
        ObjectValidatorMiddleware.validate(productCreateSchema), (req: Request, res: Response) => {
            RouterHandler.manage(this._productController.createProduct(req.body), req, res);
        });

        this._route.get("/", (req: Request, res: Response) => {
            RouterHandler.manage(this._productController.getProducts(), req, res);
        });

        this._route.get("/:id", (req: Request, res: Response) => {
            RouterHandler.manage(this._productController.getProduct(Number(req.params.id)), req, res);
        });

        this._route.patch("/:id", AuthRole.validate(UserRole.ADMINISTRATOR),
        ObjectValidatorMiddleware.validate(productUpdateSchema), (req: Request, res: Response) => {
            RouterHandler.manage(this._productController.updateProduct(Number(req.params.id), req.body), req, res);
        });

        return this._route;
    }
}

export default new Product();