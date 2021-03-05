FROM nginx:alpine
# WORKDIR /web
# COPY . .
RUN adduser -SD appadm
USER appadm
# CMD ["npm","start"]
