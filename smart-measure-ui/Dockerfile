FROM node:14


WORKDIR /app


RUN apt clean && apt update && apt upgrade -y
RUN apt install openjdk-8-jdk -y

COPY ./package.json .
COPY ./coupa-common-js-1.6.1.tgz .

RUN npm install

COPY . .

CMD [ "npm", "start" ]