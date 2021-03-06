FROM cypress/base:13.3.0

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install

RUN $(npm bin)/cypress verify

RUN [ "npm", "run", "cy:run"]