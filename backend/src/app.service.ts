import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Product } from './entities/product.entity'

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  getHello(): string {
    return 'Hello World!'
  }

  async getDbHealth(): Promise<{
    status: string
    database: string
    productCount: number
  }> {
    try {
      const count = await this.productRepository.count()
      return {
        status: 'connected',
        database: 'PostgreSQL',
        productCount: count,
      }
    } catch (error) {
      return {
        status: 'error',
        database: 'PostgreSQL',
        productCount: -1,
      }
    }
  }
}
