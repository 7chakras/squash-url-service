FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 1337

CMD [ "npm", "start" ]