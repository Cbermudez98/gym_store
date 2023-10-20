import { genSaltSync, hashSync, compareSync } from "bcrypt";
export class Bcrypt {
    private readonly _salt = genSaltSync(10);
    constructor() {}

    encrypt(plainTxt: string): string {
        return hashSync(plainTxt, this._salt);
    }

    compare(password: string, encryptedTxt: string): boolean {
        return compareSync(password, encryptedTxt);
    }
}