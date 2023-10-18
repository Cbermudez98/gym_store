import { genSaltSync, hashSync, compareSync } from "bcrypt";
export class Bcrypt {
    private readonly _salt = genSaltSync(10);
    constructor() {}

    encrypt(plainTxt: string): string {
        return hashSync(plainTxt, this._salt);
    }

    compare(encryptedTxt: string): boolean {
        return compareSync(encryptedTxt, this._salt);
    }
}