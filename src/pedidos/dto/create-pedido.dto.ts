import { ProductoBase } from "src/productos/entities/producto.entity";

export class CreatePedidoDto {
    id_producto: number;
    quantity: number;
    clientName: string;
    email: string;
    address: string;
}