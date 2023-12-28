FROM node:20.7.0

# create destination directory
RUN mkdir -p /web/app
WORKDIR /web/app

COPY package.json /web/app/package.json
COPY package-lock.json /web/app/package-lock.json
# copy the app, note .dockerignore
COPY . /web/app/

RUN npm install

# start the app
CMD ["npm", "test"]

# start the app
CMD ["npm", "start"]
