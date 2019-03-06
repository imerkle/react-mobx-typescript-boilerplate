# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:10 as build-stage

ARG NODE_ENVX

RUN apt-get update

WORKDIR /app

COPY ./nginx/nginx.conf /nginx.conf
COPY ./nginx/default.conf.template /default.conf.template

WORKDIR /app

COPY package*.json /app/


RUN yarn install

COPY ./ /app/

#RUN CI=true npm test
RUN mkdir /app/dist/

RUN NODE_ENVX=${NODE_ENVX} yarn run build


# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM fholzer/nginx-brotli:v1.14.2
#FROM nginx

COPY --from=build-stage /app/dist/ /usr/share/nginx/html
COPY --from=build-stage /nginx.conf /etc/nginx/nginx.conf

#COPY --from=build-stage /default.conf.template /etc/nginx/conf.d/default.conf.template
#CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'

COPY --from=build-stage /default.conf.template /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'