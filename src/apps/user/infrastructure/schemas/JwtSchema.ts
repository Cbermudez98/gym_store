import Joi from "joi";
import { UserRole } from "../../domain/IUser";
import { IJwtRequest } from "../../domain/IJwtRequest";

const role = Joi.string().valid(UserRole.ADMINISTRATOR, UserRole.User);
const uid = Joi.number().min(1);
const iat = Joi.number();
const exp = Joi.number();

export const JwtSchema: Joi.ObjectSchema<IJwtRequest> = Joi.object({
    uid: uid.required(),
    role: role.required(),
    iat: iat.required(),
    exp: exp.required()
});