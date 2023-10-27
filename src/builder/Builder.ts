import { IMail } from "../models/Mail";

// export class MailBuilder {
//     private _mail: IMail;

//     constructor() {
//         this._mail = {
//             from: "",
//             html: "",
//             subject: "",
//             to: ""
//         };
//     }

//     setFrom(from: string) {
//         this._mail.from = from;
//     }

//     setHtml(html: string) {
//         this._mail.html = html;
//     }

//     setSubject(subject: string) {
//         this._mail.subject = subject;
//     }

//     setTo(to: string) {
//         this._mail.to = to;
//     }

//     build() {
//         return this._mail;
//     }
// }

export class Builder<T extends Record<string, any>> {
    private _obj: Partial<T> = {};

    set<K extends keyof T>(property: K, value: T[K]): this {
        this._obj[property] = value;
        return this;
    }

    build(): T {
        return this._obj as T;
    }
}
