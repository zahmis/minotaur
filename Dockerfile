# use image
FROM node:14

# create working directory in docker
WORKDIR /mino

# local . copy to docker /mino
COPY . /mino

# run command in docker 
RUN yarn install

EXPOSE 3000

# exec shell command in docker  
CMD sh -c "yarn build && yarn start"