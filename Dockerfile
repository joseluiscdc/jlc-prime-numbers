FROM node:12

COPY [".", "/usr/src/"]

WORKDIR /usr/src

RUN npm install

CMD ["node", "main.js"]
