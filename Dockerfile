FROM node:20-alpine AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

FROM deps AS builder
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Run as non-root for security
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -G nodejs

# Copy the standalone output and static assets
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]

