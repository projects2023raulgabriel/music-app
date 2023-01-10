
FROM node:16-alpine

COPY package.json ./ ./

RUN yarn

EXPOSE 4395

CMD ["yarn", "dev"]