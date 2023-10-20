import { IProduct } from './../../domain/IProducts';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("product")
export class ProductEntity implements IProduct {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;
    
    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    stock: number;

    @Column({ default: true })
    active: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}