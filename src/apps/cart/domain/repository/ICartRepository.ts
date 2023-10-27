import { ICart, ICartCreate } from "../ICart";

export interface ICartProduct {
    saveCart: (cart: ICartCreate) => Promise<ICart>;
    getCart: (cartId: ICart["id"]) => Promise<ICart | null>;
    updateCart: (cart: ICart) => Promise<ICart>;
}