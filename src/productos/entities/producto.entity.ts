import { Pedido } from "src/pedidos/entities/pedido.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'producto'
})
export class ProductoBase {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    public nombre: string;

    @Column()
    public codigo: number;

    @Column()
    public descripcion: string;

    @Column()
    public categoria: string;

    @Column()
    public precio: number;

    @Column()
    public cantidad: number;

    @Column()
    public quantity: number;

    @Column()
    public imagen: string;

    @Column()
    public clearance: boolean;


    constructor(
        id: number,
        nombre: string,
        codigo: number,
        descripcion: string,
        categoria: string,
        precio: number,
        cantidad: number,
        quantity: number,
        imagen: string,
        clearance: boolean,
    ){
        this.id = id;
        this.nombre = nombre;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.precio = precio;
        this.cantidad = cantidad;
        this.quantity = quantity;
        this.imagen = imagen;
        this.clearance = clearance;

    }
}