import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async insertProduct(title: string, description: string, price: number) {
    const newProduct = new this.productModel({ title, description, price });
    const result = await newProduct.save();
    console.log(result);
    return result.id as string;
  }

  async getProducts() {
    const products = await this.productModel.find().exec();
    return products.map((prod) => ({
      id: prod.id,
      title: prod.title,
      description: prod.description,
      price: prod.price,
    }));
  }

  async findProduct(id: string): Promise<Product> {
    let product;
    //  this try catch handles malformed id query - localhost:3000/products/6259564dfbcf67d4ff8331c4sds
    try {
      product = await this.productModel.findById(id);
    } catch (error) {
      throw new NotFoundException(`Product with id: ${id} not found`);
    }
    if (!product)
      throw new NotFoundException(`Product with id: ${id} not found`);
    return product;
  }

  async getProductById(prodId: string) {
    const product = await this.findProduct(prodId);
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
    };
  }

  async updateProduct(
    prodId: string,
    prodTitle: string,
    prodDesc: string,
    prodPrice: number,
  ) {
    const updatedProduct = await this.findProduct(prodId);
    console.log(`updated prod: ${updatedProduct}`);
    if (prodTitle) updatedProduct.title = prodTitle;
    if (prodDesc) updatedProduct.description = prodDesc;
    if (prodPrice) updatedProduct.price = prodPrice;
    await updatedProduct.save();
  }

  async deleteProduct(prodId: string) {
    let result;
    try {
      result = await this.productModel.deleteOne({ _id: prodId }).exec(); //  note: data is stored as _id in mongo db
    } catch (error) {
      throw new NotFoundException(`Malformed product id: ${prodId}`);
    }
    if (result?.deletedCount === 0)
      throw new NotFoundException(`Product with id: ${prodId} not found`);
  }
}
