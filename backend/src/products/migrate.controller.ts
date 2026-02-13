import { Controller, Post } from '@nestjs/common'
import { DataSource } from 'typeorm'

@Controller('migrate')
export class MigrateController {
  constructor(private dataSource: DataSource) {}

  @Post()
  async migrate() {
    try {
      // This will create all tables based on entities
      await this.dataSource.synchronize()
      return { success: true, message: 'Database tables created successfully' }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }
}
