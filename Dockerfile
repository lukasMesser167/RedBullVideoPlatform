# base image
FROM nginx:1.17.1-alpine

# add app
COPY docs /usr/share/nginx/html

