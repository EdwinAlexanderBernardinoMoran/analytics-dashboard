FROM node:24-alpine AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN corepack enable

RUN pnpm install

COPY . .

EXPOSE 5174

CMD ["pnpm", "run", "dev", "--host", "0.0.0.0", "--port", "5174"]