FROM node:6.10.2-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

RUN npm i

COPY . /app

EXPOSE 4200/tcp

CMD ["npm", "start", "--", "--host", "0.0.0.0", "--poll", "500"]
