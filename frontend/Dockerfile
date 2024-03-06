# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:21-alpine3.18 as build-stage
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY ./ /app
#ARG configuration=production
RUN npm run build --prod

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.25.4-alpine
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build-stage /app/dist/frontend /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Permission
RUN chown root /usr/share/nginx/html/*
RUN chmod 777 /usr/share/nginx/html/*

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]
