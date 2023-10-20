import { IProduct, IProductUpdate } from './../IProducts';
import { ResponseModel } from "../../../../models/ResponseModel";
import { IProductCreate } from "../IProducts";

export interface IProductController {
    createProduct: (product: IProductCreate) => Promise<ResponseModel>;
    getProduct: (id: IProduct["id"]) => Promise<ResponseModel>;
    getProducts: () => Promise<ResponseModel>;
    updateProduct: (id: IProduct["id"], product: IProductUpdate) => Promise<ResponseModel>;
}