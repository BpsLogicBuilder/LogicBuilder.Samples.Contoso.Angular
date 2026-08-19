# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
EXPOSE 8080

COPY . .

RUN --mount=type=secret,id=kendo_license,env=TELERIK_LICENSE \
    npm ci --ignore-scripts && \
    npx --ignore-scripts -p @progress/kendo-licensing@1.11.2 kendo-ui-license activate && \
    npm run build

# Production stage
FROM nginxinc/nginx-unprivileged:stable-alpine

COPY --chown=nginx:nginx --from=builder /app/dist/contoso/browser /usr/share/nginx/html
COPY --chown=nginx:nginx env.template.json /usr/share/nginx/html/assets/env.template.json
COPY --chown=nginx:nginx entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]