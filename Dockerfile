# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

COPY . .

RUN --mount=type=secret,id=kendo_license,env=TELERIK_LICENSE \
    npm ci --ignore-scripts && \
    npx --ignore-scripts -p @progress/kendo-licensing@1.11.2 kendo-ui-license activate && \
    npm run build

# Production stage
FROM nginx:alpine
RUN addgroup -S nonroot \
    && adduser -S nonroot -G nonroot

COPY --from=builder /app/dist/contoso/browser /usr/share/nginx/html
COPY env.template.json /usr/share/nginx/html/assets/env.template.json
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

USER nonroot

ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
