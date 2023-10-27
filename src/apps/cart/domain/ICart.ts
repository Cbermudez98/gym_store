import { IUser } from "../../user/domain/IUser";
import { IItemCart } from "./IItemCart";

export interface ICart {
    id: number;
    paid: boolean;
    user: IUser;
    items: IItemCart[]
    created_at: Date;
    updated_at: Date;
}

export interface ICartCreate extends Omit<ICart, "id" | "created_at" | "updated_at"> {}

export interface ICartUpdate extends Partial<ICart> {}