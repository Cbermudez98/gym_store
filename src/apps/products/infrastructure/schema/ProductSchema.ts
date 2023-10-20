import Joi from "joi";
import { IProductCreate, IProductUpdate } from "../../domain/IProducts";

const name = Joi.string();
const brand = Joi.string();
const description = Joi.string();
const price = Joi.number();
const stock = Joi.number();
const active = Joi.boolean();

export const productCreateSchema: Joi.ObjectSchema<IProductCreate> = Joi.object({
    name: name.required(),
    description: description.required(),
    price: price.required(),
    stock: stock.required(),
    brand: brand.required(),
    active
});

export const productUpdateSchema: Joi.ObjectSchema<IProductUpdate> = Joi.object({
    name,
    description,
    price,
    stock,
    brand,
    active
});