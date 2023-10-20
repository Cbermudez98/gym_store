import { IProduct, IProductCreate, IProductUpdate } from "../IProducts";

export interface IProductRepository {
    getProduct: (id: IProduct["id"]) => Promise<IProduct>;
    getProducts: () => Promise<IProduct[]>;
    createProduct: (product: IProductCreate) => Promise<IProduct>;
    updateProduct: (id: IProduct["id"], product: IProductUpdate) => Promise<IProduct>;
}