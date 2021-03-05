FROM node:10-alpine
WORKDIR /web
COPY package.json .
RUN npm install
ADD . /web
CMD [ "npm", "start"]
