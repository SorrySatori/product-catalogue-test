# Product Catalogue Microproject

A microproject with both frontend and backend in a single repository.

## Project Structure

```
product-catalogue/
├── backend/          # NestJS backend
├── frontend/         # SvelteKit + Skeleton UI frontend
└── README.md
```

## Backend (NestJS)

The backend is built with NestJS framework.

### Running the backend:
```bash
cd backend
pnpm start:dev
```

The backend will run on `http://localhost:3002`

## Frontend (SvelteKit + Skeleton UI)

The frontend is built with SvelteKit and uses Skeleton UI component library.

### Running the frontend:
```bash
cd frontend
pnpm dev
```

The frontend will run on `http://localhost:5173`

## Getting Started

1. Install dependencies for both projects:
```bash
cd backend && pnpm install
cd ../frontend && pnpm install
```

2. Run both servers in separate terminals:
```bash
# Terminal 1 - Backend
cd backend && pnpm start:dev

# Terminal 2 - Frontend
cd frontend && pnpm dev
```
Pro Labs projects catalogue
