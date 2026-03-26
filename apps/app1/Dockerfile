# Multi-stage build for Next.js app
FROM node:20-alpine AS builder

# Update packages for security
RUN apk update && apk upgrade

# Set working directory
WORKDIR /app

# Copy root package files
COPY package*.json ./

# Copy workspace package files
COPY apps/app1/package*.json ./apps/app1/

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Generate Prisma Client
RUN npm run generate --workspace=@monorepo/database

# Ensure public folder exists
RUN mkdir -p ./apps/app1/public

# Build the app
RUN npm run build --workspace=apps/app1

# Production stage
FROM node:20-alpine AS runner

# Update packages for security
RUN apk update && apk upgrade

# Set working directory
WORKDIR /app

# Copy built app from builder stage
COPY --from=builder /app/apps/app1/.next ./.next
RUN mkdir -p ./public
COPY --from=builder /app/apps/app1/public/. ./public/

# Copy node_modules from builder
COPY --from=builder /app/node_modules ./node_modules

# Copy package.json for scripts
COPY --from=builder /app/apps/app1/package.json ./package.json

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start", "--workspace=apps/app1"]