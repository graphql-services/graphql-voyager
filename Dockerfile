FROM node:alpine

COPY . /app
WORKDIR /app

RUN yarn

ENTRYPOINT [ ]
CMD [ "npm","start" ]