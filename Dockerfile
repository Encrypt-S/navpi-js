FROM node:6.10.2-alpine

RUN mkdir -p /app
WORKDIR /app

RUN apk update
RUN apk upgrade
RUN apk add --no-cache bash git openssh

COPY . .

RUN npm install -g @angular/cli

RUN npm i

ENTRYPOINT ["/bin/bash"]
