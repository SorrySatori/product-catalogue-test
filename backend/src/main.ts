import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { webcrypto } from 'crypto'

if (!globalThis.crypto) {
  globalThis.crypto = webcrypto as any
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  
  // Enable CORS for frontend
  const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:5175',
    'http://localhost:4173',
    process.env.FRONTEND_URL,
  ].filter(Boolean)

  app.enableCors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, Postman)
      if (!origin) return callback(null, true)
      
      // Allow any vercel.app domain
      if (origin.endsWith('.vercel.app')) return callback(null, true)
      
      // Allow specific origins
      if (allowedOrigins.includes(origin)) return callback(null, true)
      
      callback(new Error('Not allowed by CORS'))
    },
    credentials: true,
  })
  
  await app.listen(process.env.PORT ?? 3002)
  console.log(`Application is running on: http://localhost:${process.env.PORT ?? 3002}`)
}
bootstrap()
