FROM node:12

WORKDIR /usr/app/server

COPY ["package.json", "package-lock.json", "/usr/app/server/"]

RUN npm install

COPY [".", "/usr/app/server"]


CMD ["node", "main.js"]
