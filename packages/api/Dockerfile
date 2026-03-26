# Multi-stage build for Node.js API
FROM node:20-alpine AS builder

# Update packages for security
RUN apk update && apk upgrade

# Set working directory
WORKDIR /app

# Copy root package files
COPY package*.json ./

# Copy workspace package files
COPY packages/api/package*.json ./packages/api/

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Generate Prisma Client
RUN npm run generate --workspace=@monorepo/database

# Build the API
RUN npm run build --workspace=packages/api

# Production stage
FROM node:20-alpine AS runner

# Update packages for security
RUN apk update && apk upgrade

# Set working directory
WORKDIR /app

# Copy built app from builder stage
COPY --from=builder /app/packages/api/dist ./dist

# Copy node_modules from builder
COPY --from=builder /app/node_modules ./node_modules

# Copy package.json for scripts
COPY --from=builder /app/packages/api/package.json ./package.json

# Expose port (adjust if different)
EXPOSE 3000

# Start the API
CMD ["npm", "run", "start", "--workspace=packages/api"]