import { Product } from './product';

export class ProductRepository {
  private products: Product[] = [
    {
      id: 1,
      name: 'iphone 14',
      price: 20000,
      imageUrl: '1.jpeg',
      description: 'good phone',
      isActive: true,
      categoryId: 1,
    },
    {
      id: 2,
      name: 'iphone 15',
      price: 25000,
      imageUrl: '2.jpeg',
      description: 'good phone',
      isActive: true,
      categoryId: 1,
    },
    {
      id: 3,
      name: 'iphone 16',
      price: 30000,
      imageUrl: '3.jpeg',
      description: 'good phone',
      isActive: true,
      categoryId: 1,
    },
    {
      id: 4,
      name: 'iphone 17',
      price: 35000,
      imageUrl: '1.jpeg',
      description: 'good phone',
      isActive: true,
      categoryId: 2,
    },
    {
      id: 5,
      name: 'iphone 18',
      price: 40000,
      imageUrl: '2.jpeg',
      description: 'good phone',
      isActive: true,
      categoryId: 2,
    },
    {
      id: 6,
      name: 'iphone 19',
      price: 45000,
      imageUrl: '3.jpeg',
      description: 'good phone',
      isActive: true,
      categoryId: 2,
    },
  ];

  getProducts(): Product[] {
    return this.products.filter((p) => p.isActive);
  }

  getProductById(id: number) {
    return this.products.find((p) => p.id == id);
  }

  getProductsByCategoryId(id: number): Product[] {
    return this.products.filter((p) => p.categoryId == id);
  }
}
