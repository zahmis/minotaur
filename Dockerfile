FROM node:14

RUN mkdir /mino
WORKDIR /mino
COPY . /mino
RUN yarn install

EXPOSE 3000

CMD sh -c "yarn build && yarn start"