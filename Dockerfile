FROM node:latest

RUN mkdir -p /

WORKDIR /

COPY package.json .

RUN npm install 

COPY . .

EXPOSE 8081

CMD [ "npm"  , "start" ]