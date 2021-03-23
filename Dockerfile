FROM node:latest

RUN mkdir -p /api

WORKDIR /api

COPY package.json .

RUN npm install 

COPY . .

EXPOSE 8081