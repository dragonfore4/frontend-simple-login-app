# Step 1: Build stage
FROM node:24-alpine AS builder

WORKDIR /app

ARG NEXT_PUBLIC_BACKEND_URL=/app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN NEXT_PUBLIC_BACKEND_URL=$NEXT_PUBLIC_BACKEND_URL npm run build

# Build the Next.js app
# RUN npm run build

# Step 2: Production stage
FROM node:24-alpine AS runner

WORKDIR /app

# Copy only necessary files from build stage
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next .next
COPY --from=builder /app/public ./public

ENV NODE_ENV=production

EXPOSE 3000
CMD ["npm", "start"] 
