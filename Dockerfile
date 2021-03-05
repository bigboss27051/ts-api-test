FROM node:10-alpine
WORKDIR /app
COPY . .
RUN adduser -SD appadm
USER appadm
RUN npm install
CMD ["npm","start"]
