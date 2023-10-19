import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import { IAuth } from "../../domain/IAuth";
import { UserEntity } from "./User.entity";

@Entity("auth_confirmation")
export class AuthEntity implements IAuth {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url_confirmation: string;

    @Column({ unique: true })
    jwt: string;

    @Column({ unique: true })
    user_id: number;

    @Column({ default: false })
    verified: boolean;

    @CreateDateColumn({ default: () => "NOW()" })
    created_at: Date;

    @UpdateDateColumn({ default: () => "NOW()" })
    updated_at: Date;

    @OneToOne(() => UserEntity)
    @JoinColumn({ name: "user_id" })
    user: UserEntity;
}