import { ConfigService } from '@nestjs/config'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { Product } from '../entities/product.entity'

export const getDatabaseConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  return {
    type: 'postgres',
    host: configService.get<string>('POSTGRES_HOST', 'localhost'),
    port: configService.get<number>('POSTGRES_PORT', 5432),
    username: configService.get<string>('POSTGRES_USER', 'postgres'),
    password: configService.get<string>('POSTGRES_PASSWORD', 'postgres'),
    database: configService.get<string>('POSTGRES_DB', 'product_catalogue'),
    entities: [Product],
    synchronize: configService.get<string>('NODE_ENV') !== 'production' || configService.get<string>('ENABLE_SYNC') === 'true',
    logging: configService.get<string>('NODE_ENV') === 'development',
  }
}
