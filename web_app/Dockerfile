FROM node:alpine

RUN mkdir -p /usr/src/app
ENV PORT 3000

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN yarn install --force

RUN yarn run build

EXPOSE 3000

CMD [ "yarn", "run", "dev" ]
