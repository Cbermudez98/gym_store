import Joi from "joi";
import { IProductToCart } from "../../../products/domain/IProducts";

const id = Joi.number();
const amount = Joi.number();


export const addProductToCartSchema: Joi.ObjectSchema<IProductToCart> = Joi.object({
    id: id.required(),
    amount: amount.required()
});