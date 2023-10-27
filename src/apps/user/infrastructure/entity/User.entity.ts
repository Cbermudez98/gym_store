import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { IUser, UserRole } from "../../domain/IUser";
import { AuthEntity } from "./Auth.entity";
import { ICart } from "../../../cart/domain/ICart";
import { CartEntity } from "../../../cart/infrastructure/entity/Cart.entity";

@Entity("user")
export class UserEntity implements IUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    last_name: string;

    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({ default: false })
    validated: boolean;

    @Column({ type: "enum", enum: UserRole, default: UserRole.User })
    role: UserRole;

    @Column({ nullable: true })
    validated_at: Date;
    
    @CreateDateColumn({ default: () => "NOW()" })
    created_at: Date;

    @UpdateDateColumn({ default: () => "NOW()" })
    updated_at: Date;

    @OneToOne(() => AuthEntity)
    @JoinColumn({ name: "auth_id" })
    auth: AuthEntity;

    @OneToMany(() => CartEntity, (cart) => cart.user)
    carts: CartEntity[];
}