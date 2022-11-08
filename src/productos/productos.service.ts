import {Injectable} from '@nestjs/common';
import { CreateProducDto } from './dto/create-produc.dto';
import { InjectRepository} from '@nestjs/typeorm';
import {ProductoBase} from './entities/producto.entity'
import { Repository } from 'typeorm';
import { UpdateProductoDto } from './dto/update-producto.dto';





@Injectable()
export class ProductosService {
    
    
    

    constructor(@InjectRepository(ProductoBase)
        private productosRepository: Repository<ProductoBase>
      ) {}
    


    findAll(_categoria: string, _sortBy: string, _orderBy: string): Promise<ProductoBase[]>{
        return this.productosRepository.find();
    }

    findOne(id: number): Promise<ProductoBase> {
        return this.productosRepository.findOne(id);
    }

    create(createProducDto: CreateProducDto): Promise<ProductoBase> {
        const producto = this.productosRepository.create(createProducDto);
        return this.productosRepository.save(producto);
    }

    

    async update(id: number, updateProductoDto: UpdateProductoDto): Promise<ProductoBase> {
        const producto = await this.findOne(id);
        producto.codigo = updateProductoDto.codigo;
        producto.cantidad = updateProductoDto.cantidad;
        return this.productosRepository.save(producto);  
    } 

    
    
    remove(id: number): void {
        this.productosRepository.delete(id);
    }
    
    async descuento(id: number, updateProductoDto: UpdateProductoDto): Promise<ProductoBase>{
        const producto = await this.findOne(id);
        producto.quantity = updateProductoDto.quantity;
        
        if(producto.quantity<producto.cantidad){
            let des;
            des = producto.cantidad-producto.quantity;
            producto.cantidad = des;

        }
        producto.quantity = 0;
        return this.productosRepository.save(producto);  
    } 

    
}


