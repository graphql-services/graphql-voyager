FROM node:alpine

COPY . /app
WORKDIR /app

RUN yarn

ENTRYPOINT [ "npm" ]
CMD [ "start" ]