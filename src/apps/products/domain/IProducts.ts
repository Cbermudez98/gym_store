export interface IProduct {
    id: number;
    name: string;
    brand: string;
    description: string;
    price: number;
    stock: number;
    active: boolean;
    created_at: Date;
    updated_at: Date;
}

export interface IProductCreate extends Omit<IProduct, "id" | "created_at" | "updated_at"> {}

export interface IProductUpdate extends Partial<IProductCreate> {}