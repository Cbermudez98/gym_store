import { inject, injectable } from 'inversify';
import { ResponseModel } from '../../../../models/ResponseModel';
import { IProductCreate, IProductUpdate } from '../../domain/IProducts';
import { IProductController } from './../../domain/controller/IProductController';
import { Types } from '../../../../helpers/container/Types';
import { IProductUseCase } from '../../domain/application/IProductUseCase';
import { HttpStatusCode } from '../../../../models/enum';

@injectable()
export class ProductController implements IProductController {

    constructor(@inject(Types.ProductUseCase) private _productUseCase: IProductUseCase) {}

    async createProduct(product: IProductCreate): Promise<ResponseModel> {
        try {
            const data = await this._productUseCase.create(product);
            return {
                status: HttpStatusCode._SUCCESS,
                data
            };
        } catch (error) {
            throw error;
        }
    };
    async getProduct(id: number): Promise<ResponseModel> {
        try {
            const data = await this._productUseCase.get(id);
            return {
                status: HttpStatusCode._SUCCESS,
                data
            };
        } catch (error) {
            throw error;
        }
    };
    async getProducts(): Promise<ResponseModel> {
        try {
            const data = await this._productUseCase.getAll();
            return {
                status: HttpStatusCode._SUCCESS,
                data
            };
        } catch (error) {
            throw error;
        }
    };

    async updateProduct(id: number, product: IProductUpdate): Promise<ResponseModel> {
        try {
            const data = await this._productUseCase.update(id, product);
            return {
                status: HttpStatusCode._SUCCESS,
                data
            };
        } catch (error) {
            throw error;
        }
    };
}