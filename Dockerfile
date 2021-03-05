FROM node:10-alpine
WORKDIR /web
COPY . .
RUN adduser -SD appadm
USER appadm
CMD ["npm","start"]
