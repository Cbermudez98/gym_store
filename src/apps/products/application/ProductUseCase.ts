import { inject, injectable } from "inversify";
import { IProduct, IProductCreate, IProductUpdate } from "../domain/IProducts";
import { IProductUseCase } from "../domain/application/IProductUseCase";
import { Types } from "../../../helpers/container/Types";
import { IProductRepository } from "../domain/repository/IProductRepository";

@injectable()
export class ProductUseCase implements IProductUseCase {
    constructor(@inject(Types.ProductRepository) private _productRepository: IProductRepository) {}

    async get(id: number): Promise<IProduct> {
        try {
            return this._productRepository.getProduct(id);
        } catch (error) {
            throw error;
        }
    };

    async getAll(): Promise<IProduct[]> {
        try {
            return this._productRepository.getProducts();
        } catch (error) {
            throw error;
        }
    };

    async create(product: IProductCreate): Promise<IProduct> {
        try {
            return await this._productRepository.createProduct(product);
        } catch (error) {
            throw error;
        }
    };

    async update(id: number, product: IProductUpdate): Promise<IProduct> {
        try {
            return await this._productRepository.updateProduct(id, product);
        } catch (error) {
            throw error;
        }
    };
}