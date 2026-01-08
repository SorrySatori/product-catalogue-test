import { DataSource, DataSourceOptions } from 'typeorm'
import { config } from 'dotenv'
import { Product } from '../../entities/product.entity'
import { ProductSeeder } from './product.seeder'

// Load environment variables
config()

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DB || 'product_catalogue',
  entities: [Product],
  synchronize: false, // Don't auto-sync in seeder
}

const dataSource = new DataSource(dataSourceOptions)

async function runSeeders() {

  try {
    await dataSource.initialize()

    // Run seeders
    const productSeeder = new ProductSeeder()
    await productSeeder.run(dataSource)

  } catch (error) {
    console.error('❌ Error during seeding:', error)
    process.exit(1)
  } finally {
    await dataSource.destroy()
  }
}

runSeeders()
