FROM node:18.15.0

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . .

RUN apt-get -y update
RUN apt-get -y install -y --no-install-recommends git

ENTRYPOINT ["sleep", "infinity"]
