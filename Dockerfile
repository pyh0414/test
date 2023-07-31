# Node.js 이미지를 기반으로 시작합니다.
FROM node:18

# 애플리케이션 폴더를 만듭니다.
WORKDIR /usr/src/app

COPY . .

# 애플리케이션 의존성을 설치합니다.
COPY package*.json ./
RUN npm install && npx tsc

# 소스 코드를 복사합니다.

# Node.js 애플리케이션을 실행합니다.
CMD [ "node", "dist/index.js" ]