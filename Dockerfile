# BUILDER STAGE
FROM node:16 as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --omit=dev && \
     cp -R node_modules node_modules_prod && \
     npm install

COPY src ./src/
COPY tsconfig.json ./tsconfig.json
RUN npm run build

# BASE STAGE
FROM node:16 as base

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist dist
COPY --from=builder /usr/src/app/node_modules_prod node_modules

CMD node dist/index.js
