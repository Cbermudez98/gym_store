import Joi from "joi";
import { IUseCreateDto, IUserLogin } from "../../domain/IUser";

const email = Joi.string().email();
const password = Joi.string();
const username = Joi.string();
const name = Joi.string();
const last_name = Joi.string();

export const userCreateSchemaDto: Joi.ObjectSchema<IUseCreateDto> = Joi.object({
    name: name.required(),
    last_name: last_name.required(),
    email: email.required(),
    password: password.required(),
    username: username.required()
});

export const userUpdateSchemaDto: Joi.ObjectSchema<IUseCreateDto> = Joi.object({
    name,
    last_name,
    email,
    password,
    username
});

export const userLoginSchema: Joi.ObjectSchema<IUserLogin> = Joi.object({
    username: username.required(),
    password: password.required()
});