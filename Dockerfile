FROM node:16

WORKDIR /https://github.com/ChorvetCh/express-app.git

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production


EXPOSE 8080

CMD [ "node", "index.js" ]