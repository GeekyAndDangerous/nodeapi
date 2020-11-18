FROM node:12-alpine

RUN mkdir -p /nodeapi/src/app
WORKDIR /nodeapi/src/app

COPY package*.json /nodeapi/src/app
RUN npm install

COPY . /nodeapi/src/app

CMD ["node", "nodeAPI.js"]