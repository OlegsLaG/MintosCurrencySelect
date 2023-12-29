FROM node:20.9.0

# create destination directory
RUN mkdir -p /web/app
WORKDIR /web/app

COPY package.json /web/app/package.json

RUN npm install

EXPOSE 8000
# start the app
CMD ["npm", "run", "preview"]
