FROM mhart/alpine-node:base-6
RUN mkdir -p /app
WORKDIR /app
COPY . /app
EXPOSE 8000
CMD ["./node_modules/.bin/nodemon", "index.js"]