export interface IUser {
    id: number;
    name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
    validated: boolean;
    role: UserRole;
    created_at: Date;
    updated_at: Date;
    validated_at: Date;
}

export enum UserRole {
    User = "User",
    ADMINISTRATOR = "Administrator"
}

export interface IUseCreateDto extends Omit<IUser, "id" | "validated" | "created_at" | "updated_at" | "validated_at" | "role"> {}

export interface IUseCreate extends Omit<IUser, "id" | "validated" | "created_at" | "updated_at" | "validated_at"> {}

export interface IUserUpdateDto extends Partial<IUseCreateDto> {}