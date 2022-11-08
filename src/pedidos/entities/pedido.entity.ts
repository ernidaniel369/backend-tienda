import { ProductoBase } from "src/productos/entities/producto.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({
    name: "pedido"
})
export class Pedido {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_producto: number;

    @Column()
    quantity: number;

    @Column()
    clientName: string;

    @Column()
    email: string;

    @Column()
    address: string;

   
}