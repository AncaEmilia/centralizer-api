FROM node:12

WORKDIR /anca/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8090
CMD [ "node", "dist/main" ]

