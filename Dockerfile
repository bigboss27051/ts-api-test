FROM node:10-alpine
WORKDIR /app
COPY . .
RUN adduser -SD appadm
USER appadm
CMD ["npm","run","start-dev"]
