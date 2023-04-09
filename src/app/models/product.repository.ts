import { Product } from './product';

export class ProductRepository {
  private products: Product[] = [
    {
      id: 1,
      name: 'iphone 15',
      price: 20000,
      imageUrl: '1.jpeg',
      description: 'good phone',
      isActive: true,
    },
    {
      id: 2,
      name: 'iphone 16',
      price: 25000,
      imageUrl: '2.jpeg',
      description: 'good phone',
      isActive: true,
    },
    {
      id: 3,
      name: 'iphone 17',
      price: 30000,
      imageUrl: '3.jpeg',
      description: 'good phone',
      isActive: true,
    },
  ];

  getProducts(): Product[] {
    return this.products.filter((p) => p.isActive);
  }

  getProductById(id: number) {
    return this.products.find((p) => p.id == id);
  }
}
