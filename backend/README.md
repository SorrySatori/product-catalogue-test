## Overview

The backend of the application is built using NestJS, a progressive Node.js framework for building efficient and scalable server-side applications. It is designed to be modular and extensible, allowing for easy integration with various libraries and tools.

# Database Seeders

This directory contains database seeders for populating the database with test data.

## Running Seeders

### Seed the database
```bash
pnpm run db:seed
```

This will:
- Connect to the PostgreSQL database
- Check if products already exist (to prevent duplicates)
- Insert 10 sample products if the database is empty
- Display success messages

### Reset and re-seed
```bash
pnpm run db:reset  # Deletes all data and restarts database
pnpm run db:seed   # Seeds fresh data
```

## Quick Start

### 1. Use the Correct Node.js Version
```bash
# Switch to Node.js 20 (required for @nestjs/typeorm@11)
nvm use

# Or manually specify the version
nvm use 20.19.4
```

### 2. Start PostgreSQL Database
```bash
# Start the PostgreSQL container
docker-compose up -d

# Check if the container is running
docker-compose ps

# View logs
docker-compose logs -f postgres
```

### 3. Configure Environment Variables
Copy the `.env.example` file to `.env` and adjust if needed:
```bash
cp .env.example .env
```

The default configuration:
- **Host**: localhost
- **Port**: 5432
- **User**: postgres
- **Password**: postgres
- **Database**: product_catalogue

### 4. Install Dependencies and Run the Application
```bash
# Install dependencies
pnpm install

# Run in development mode
pnpm run start:dev
```

## Docker Commands

### Start the database
```bash
docker-compose up -d
```

### Stop the database
```bash
docker-compose down
```

### Stop and remove all data (⚠️ Warning: This deletes all data!)
```bash
docker-compose down -v
```

### View database logs
```bash
docker-compose logs -f postgres
```

### Access PostgreSQL CLI
```bash
docker exec -it product-catalogue-postgres psql -U postgres -d product_catalogue
```

## Database Connection

The application connects to PostgreSQL using TypeORM with the following configuration:

- **Development**: Auto-synchronization is enabled (tables are created automatically)
- **Production**: Auto-synchronization is disabled (use migrations)

## Troubleshooting

### Port Already in Use
If port 5432 is already in use, you can change it in the `.env` file:
```
POSTGRES_PORT=5433
```

Then restart the containers:
```bash
docker-compose down
docker-compose up -d
```

### Reset Database
To start fresh with a clean database:
```bash
docker-compose down -v
docker-compose up -d
```
