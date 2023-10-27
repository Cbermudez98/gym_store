import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, VirtualColumn, OneToMany } from "typeorm";
import { ICart } from "../../domain/ICart";
import { UserEntity } from "../../../user/infrastructure/entity/User.entity";
import { ItemCartEntity } from "./ItemCart.entity";

@Entity("cart")
export class CartEntity implements ICart {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: false })
    paid: boolean;

    @ManyToOne(() => UserEntity, (user) => user.carts)
    user: UserEntity;

    @OneToMany(() => ItemCartEntity, (item) => item.cart)
    items: ItemCartEntity[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @VirtualColumn({ query() {
        return "total";
    }, })
    get total(): number {
        return this.items.reduce((total, item) => total + item.amount * item.product.price, 0);
    }
}