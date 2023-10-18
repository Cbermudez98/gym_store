import { verify, sign } from "jsonwebtoken";
import { ParameterStore } from "./ParameterStore";

export class Jwt {
    sing(payload: Record<string, any>) {
        return sign(payload, ParameterStore.JWT, { expiresIn: "24h" });
    }

    verify(encrypted: string) {
        return verify(encrypted, ParameterStore.JWT);
    }
}