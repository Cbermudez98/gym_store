import { injectable } from "inversify";
import { IProduct, IProductCreate, IProductUpdate } from "../../domain/IProducts";
import { IProductRepository } from "../../domain/repository/IProductRepository";
import { Repository } from "typeorm";
import { ProductEntity } from "../entity/Product.entity";
import { appDataSource } from "../../../../config/typeorm/config";
import { HttpMessage, HttpStatusCode } from "../../../../models/enum";

@injectable()
export class ProductRepository implements IProductRepository {
    private _productRepository: Repository<ProductEntity>;

    constructor() {
        this._productRepository = appDataSource.getRepository(ProductEntity);
    }

    async getProduct(id: number): Promise<IProduct> {
        try {
            return await this._productRepository.findOneByOrFail({ id });
        } catch (error) {
            throw {
                status: HttpStatusCode._NOT_FOUND,
                message: HttpMessage._NOT_FOUND
            };
        }
    };

    async getProducts(): Promise<IProduct[]> {
        try {
            return await this._productRepository.find({ where: { active: true } });
        } catch (error) {
            throw {
                status: HttpStatusCode._NOT_FOUND,
                message: HttpMessage._NOT_FOUND
            };
        }
    };

    async createProduct(product: IProductCreate): Promise<IProduct> {
        try {
            return await this._productRepository.save(product);
        } catch (error) {
            throw {
                status: HttpStatusCode._UN_PROCESSABLE_ENTITY,
                message: HttpMessage._UN_PROCESSABLE_ENTITY
            };   
        }
    };

    async updateProduct(id: number, product: IProductUpdate): Promise<IProduct> {
        try {
            const oldProduct = await this.getProduct(id);
            return await this._productRepository.save({ ...oldProduct, ...product });
        } catch (error) {
            throw {
                status: HttpStatusCode._UN_PROCESSABLE_ENTITY,
                message: HttpMessage._UN_PROCESSABLE_ENTITY
            };
        }
    };
}