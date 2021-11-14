FROM node:16-alpine

WORKDIR /app
ADD . /app

RUN npm install

VOLUME /logs

CMD npm run wdio