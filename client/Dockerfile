FROM node:latest

RUN npm install -g http-server

WORKDIR /client

COPY package*.json /client/

RUN npm install

COPY . /client/

RUN npm run build

EXPOSE 3000

CMD ["http-server", "dist"]