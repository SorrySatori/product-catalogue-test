import { Controller, Post } from '@nestjs/common'
import { DataSource } from 'typeorm'
import { ProductSeeder } from '../database/seeds/product.seeder'

@Controller('seed')
export class SeedController {
  constructor(private dataSource: DataSource) {}

  @Post()
  async seed() {
    try {
      const productSeeder = new ProductSeeder()
      await productSeeder.run(this.dataSource)
      return { success: true, message: 'Database seeded successfully with 4 products' }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }
}
