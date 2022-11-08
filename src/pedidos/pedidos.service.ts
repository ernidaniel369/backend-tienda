import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { Pedido } from './entities/pedido.entity';


@Injectable()
export class PedidosService {

   constructor(
    @InjectRepository(Pedido)
    private pedidoRepository: Repository<Pedido>,
   ){}

   
    create(createPedidoDto: CreatePedidoDto): Promise<Pedido>{
        let pedido = this.pedidoRepository.create(createPedidoDto);
        return this.pedidoRepository.save(pedido);
    }
    
    findAll(): Promise<Pedido[]>{
        return this.pedidoRepository.find();
    }


   
}
