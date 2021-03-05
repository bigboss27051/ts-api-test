FROM node:10-alpine
WORKDIR /web
COPY . .
RUN adduser -SD appadm
USER appadm
EXPOSE 3003
CMD ["npm","start"]
