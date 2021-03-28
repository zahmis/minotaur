FROM node:14

RUN npm install
WORKDIR /mino
COPY . /mino
RUN yarn install

EXPOSE 3000