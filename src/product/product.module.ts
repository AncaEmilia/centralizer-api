import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './product.controller';
import { ProductsService } from './product.service';
import { ProductSchema } from './product.model';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Product', schema: ProductSchema }
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})

export class ProductsModule {}