# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

COPY . .

RUN --mount=type=secret,id=kendo_license,env=TELERIK_LICENSE \
    npm ci && \
    npx kendo-ui-license activate && \
    npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist/contoso/browser /usr/share/nginx/html
