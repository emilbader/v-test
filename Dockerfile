FROM node:16-alpine

WORKDIR /app
ADD . /app

RUN npm install

VOLUME /app

CMD npm run wdio