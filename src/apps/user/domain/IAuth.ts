export interface IAuth {
    id: number;
    url_confirmation: string;
    jwt: string;
    user_id: number;
    verified: boolean;
    created_at: Date;
    updated_at: Date;
}

export interface IAuthCreate extends Omit<IAuth, "id" | "created_at" | "updated_at" | "verified">{}