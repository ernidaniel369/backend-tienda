import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { Pedido } from './entities/pedido.entity';
import {PedidosService} from './pedidos.service';

@Controller('pedidos')
export class PedidosController {
    
    constructor(private pedidosService:PedidosService){}
    
    @Post()
    create(@Body() createPedidoDto: CreatePedidoDto): Promise<Pedido>{
        return this.pedidosService.create(createPedidoDto);
    }
    @Get()
    findAll(): Promise< Pedido[]> {
        return this.pedidosService.findAll();
    }
}
