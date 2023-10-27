import { IProduct } from "../../products/domain/IProducts";
import { ICart } from "./ICart";

export interface IItemCart {
    id: number;
    amount: number;
    cart: ICart;
    product: IProduct;
}