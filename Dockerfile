FROM node:10-alpine
WORKDIR /usr/src/app
COPY package.json .
RUN adduser -SD appadm
USER appadm
RUN npm install
ADD . /usr/src/app
CMD [ "npm", "start"]
