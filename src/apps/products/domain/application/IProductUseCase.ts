import { IProduct, IProductCreate, IProductUpdate } from "../IProducts";

export interface IProductUseCase {
    get: (id: IProduct["id"]) => Promise<IProduct>;
    getAll: () => Promise<IProduct[]>;
    create: (product: IProductCreate) => Promise<IProduct>;
    update: (id: IProduct["id"], product: IProductUpdate) => Promise<IProduct>;
}