import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, desc: string, price: number): string {
    const prodId = Math.random().toString();
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }

  getProducts() {
    return [...this.products]; //  makes a new array with items of products[], ... is known as spread operator
  }

  findProduct(id: string): [Product, number] {
    const index = this.products.findIndex((prod: Product) => prod.id === id);
    const product = this.products[index];
    if (!product)
      throw new NotFoundException(`Could not find product with id ${id}`);
    return [product, index];
  }

  getProductById(prodId: string) {
    const product = this.findProduct(prodId)[0];
    return { ...product };
  }

  updateProduct(
    prodId: string,
    prodTitle: string,
    prodDesc: string,
    prodPrice: number,
  ) {
    const [product, index] = this.findProduct(prodId);
    const updatedProduct: Product = { ...product }; //  creating a copy of product
    console.log(`updated prod: ${updatedProduct}`);
    if (prodTitle) updatedProduct.title = prodTitle;
    if (prodDesc) updatedProduct.description = prodDesc;
    if (prodPrice) updatedProduct.price = prodPrice;
    this.products[index] = updatedProduct;
  }

  deleteProduct(prodId: string) {
    const index = this.findProduct(prodId)[1];
    this.products.splice(index, 1);
  }
}
