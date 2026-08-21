FROM node

WORKDIR /app

# COPY index.js index.js
# COPY package.json package.json
# COPY package-lock.json  package-lock.json

COPY package*.json .
RUN npm install
COPY . .

CMD [ "node","index.js"]  

  