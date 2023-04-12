FROM node:alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent
RUN npm install react-scripts -g --silent

RUN npm install -g nodemon 
COPY . ./

CMD ["nodemon", "--exec", "npm", "start"]