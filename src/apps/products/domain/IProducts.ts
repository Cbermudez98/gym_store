import { ICart } from "../../cart/domain/ICart";

export interface IProduct {
    id: number;
    name: string;
    brand: string;
    description: string;
    price: number;
    stock: number;
    active: boolean;
    carts: ICart[];
    created_at: Date;
    updated_at: Date;
}

export interface IProductCreate extends Omit<IProduct, "id" | "created_at" | "updated_at" | "carts"> {}

export interface IProductUpdate extends Partial<IProductCreate> {}

export interface IProductToCart extends Pick<IProduct, "id"> {
    amount: number;
}