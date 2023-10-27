import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { IItemCart } from "../../domain/IItemCart";
import { CartEntity } from "./Cart.entity";
import { ProductEntity } from "../../../products/infrastructure/entity/Product.entity";

@Entity("ItemCart")
export class ItemCartEntity implements IItemCart {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @ManyToOne(() => CartEntity, (cart) => cart.items, { cascade: true })
    cart: CartEntity;

    @ManyToOne(() => ProductEntity)
    product: ProductEntity;
}