FROM node:12-alpine
WORKDIR /nodeapi
COPY . .
CMD ["node", "nodeAPI.js"]