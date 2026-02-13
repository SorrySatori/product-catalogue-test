FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/ ./

RUN addgroup -S app && adduser -S app -G app
USER app

EXPOSE ${PORT}

CMD ["node", "dist/main.js"]