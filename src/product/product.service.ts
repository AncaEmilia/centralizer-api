import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async createProduct(
    Name: string,
    Code: string,
    Weight: number,
    Price: number,
    Color: string,
    isDeleted: boolean,
  ) {
    const newProduct = new this.productModel({
      Name,
      Code,
      Weight,
      Price,
      Color,
      isDeleted,
    });
    const result = await newProduct.save();
    console.log(result);
    return result;
  }

  async getProducts() {
    const products = await this.productModel.find().exec();
    return products.map((prod) => ({
      id: prod.id,
      Name: prod.Name,
      Code: prod.Code,
      Weight: prod.Weight,
      Price: prod.Price,
      Color: prod.Color,
      isDeleted: prod.isDeleted,
    }));
  }

  private async findProduct(id: string): Promise<Product> {
    try {
      const product = await this.productModel.findById(id);
      return product;
    } catch (error) {
      throw new NotFoundException('Produsul nu a fost gasit');
    }
  }

  async updateProduct(
    productId: string,
    Name: string,
    Code: string,
    Weight: number,
    Price: number,
    Color: string,
    isDeleted: boolean,
  ) {
    const updateProduct = await this.findProduct(productId);

    if (Name) {
      updateProduct.Name = Name;
    }
    if (Code) {
      updateProduct.Code = Code;
    }
    if (Weight) {
      updateProduct.Weight = Weight;
    }
    if (Price) {
      updateProduct.Price = Price;
    }
    if (Color) {
      updateProduct.Color = Color;
    }
    if (isDeleted) {
      updateProduct.isDeleted = isDeleted;
    }
    updateProduct.save();
  }
}
