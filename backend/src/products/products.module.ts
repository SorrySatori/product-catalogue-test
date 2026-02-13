import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductsController } from './products.controller'
import { ProductsService } from './products.service'
import { Product } from '../entities/product.entity'
import { SeedController } from './seed.controller'
import { MigrateController } from './migrate.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController, SeedController, MigrateController],
  providers: [ProductsService],
})
export class ProductsModule {}
