# ==== CONFIGURE Nginx ====
FROM nginx:alpine AS nginx

# Copia el archivo de configuración personalizado de Nginx
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# ==== CONFIGURE Node.js ====
FROM node:16-alpine AS node

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de la aplicación
COPY . .

# Instala las dependencias y construye la aplicación
RUN npm install && npm run build

# ==== BUILD ====
FROM nginx:alpine

# Copia los archivos construidos de la aplicación
COPY --from=node /app/dist /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]