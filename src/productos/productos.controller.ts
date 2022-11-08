import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res} from '@nestjs/common';
import {ProductosService} from './productos.service';
import {CreateProducDto} from './dto/create-produc.dto';
import { QueryProducDTO } from './dto/query-produc.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import {ProductoBase} from './entities/producto.entity'

@Controller('productos')
export class ProductosController {
    constructor(private readonly productosService: ProductosService) {}

  @Get()
  findAll(@Query() query : QueryProducDTO): Promise< ProductoBase[]> {
    let categoria = query.categoria;
    let sortBy = query.sortBy;
    let orderBy = query.orderBy;
    return this.productosService.findAll(categoria, sortBy, orderBy);
  }

  @Get(':id')
  findOne(@Param() params){
    return this.productosService.findOne(params.id);
  }

  @Post()
  create(@Body() createProducDto: CreateProducDto){
    return this.productosService.create(createProducDto);
  }

  @Put(':id')
  update(@Param('id') id:number, @Body() updateProductoDto: UpdateProductoDto): Promise<ProductoBase>{
    return this.productosService.update(id, updateProductoDto);
  }
  
  @Put('/descuento/:id')
  descuento(@Param('id') id:number, @Body() updateProductoDto: UpdateProductoDto): Promise<ProductoBase>{
    return this.productosService.descuento(id, updateProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number ): void{
    return this.productosService.remove(id);
  }

  
}
