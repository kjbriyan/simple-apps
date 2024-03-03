FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN apt-get update && \
    apt-get install -y iputils-ping && \
    rm -rf /var/lib/apt/lists/*

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start","bash"]
