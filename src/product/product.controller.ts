import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  Patch,
} from '@nestjs/common';
import { ProductsService } from './product.service';

@Controller('produse')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async addProduct(
    @Body('Name') prodName: string,
    @Body('Code') prodCode: string,
    @Body('Weight') prodWeight: number,
    @Body('Price') prodPrice: number,
    @Body('Color') prodColor: string,
    @Body('isDeleted') prodIsDeleted: boolean,
  ) {
    const generatedId = await this.productsService.createProduct(
      prodName,
      prodCode,
      prodWeight,
      prodPrice,
      prodColor,
      prodIsDeleted,
    );
    return { id: generatedId };
  }

  @Get()
  async getAllProducts() {
    const products = await this.productsService.getProducts();
    return products;
  }

  @Patch(':id')
  async updateProduct(
    @Param('id') prodId: string,
    @Body('Name') prodName: string,
    @Body('Code') prodCode: string,
    @Body('Weight') prodWeight: number,
    @Body('Price') prodPrice: number,
    @Body('Color') prodColor: string,
    @Body('isDeleted') prodIsDeleted: boolean,
  ) {
    await this.productsService.updateProduct(
      prodId,
      prodName,
      prodCode,
      prodWeight,
      prodPrice,
      prodColor,
      prodIsDeleted,
    );
    return null;
  }
}
