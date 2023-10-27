import { ICart } from "../../cart/domain/ICart";
import { IAuth } from "./IAuth";

export interface IUser {
    id: number;
    name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
    validated: boolean;
    role: UserRole;
    carts: ICart[];
    created_at: Date;
    updated_at: Date;
    validated_at: Date;
}

export interface IUserAuth extends Omit<IUser, "carts"> {
    auth: IAuth
}

export enum UserRole {
    User = "User",
    ADMINISTRATOR = "Administrator"
}

export interface IUseCreateDto extends Omit<IUser, "id" | "validated" | "created_at" | "updated_at" | "validated_at" | "role" | "carts"> {}

export interface IUseCreate extends Omit<IUser, "id" | "validated" | "created_at" | "updated_at" | "validated_at" | "carts"> {}

export interface IUserUpdateDto extends Partial<IUseCreateDto> {
    auth?: number,
    validated?: IUser["validated"]
}

export interface IUserLogin extends Pick<IUser, "username" | "password">{};