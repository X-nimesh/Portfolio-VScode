FROM node:20-alpine as builder
WORKDIR /app
COPY package.json .
COPY pnpm-lock.yaml .
RUN npm install -g pnpm
COPY . .
RUN pnpm install
RUN pnpm build
FROM nginx:stable-alpine
COPY --from=builder /app/deploy/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
