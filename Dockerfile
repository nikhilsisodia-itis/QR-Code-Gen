# Stage 1: Build React (Vite) app
FROM node:20.10.0-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:1.27.0-alpine

# Custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Remove default nginx html and copy Vite's build
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
