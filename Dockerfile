FROM node:14

WORKDIR /corona-tracker

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "run", "dev"]
