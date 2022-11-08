import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosService } from './productos/productos.service';
import { ProductosController } from './productos/productos.controller';
import { ProductoBase } from './productos/entities/producto.entity';
import { Pedido } from './pedidos/entities/pedido.entity';
import { PedidosModule } from './pedidos/pedidos.module';
import { ProductosModule } from './productos/productos.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'crudproductos',
    entities: [ProductoBase, Pedido],
    synchronize: true
  }), 
  ProductosModule, PedidosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
