FROM node:16

WORKDIR /app

COPY . .

RUN rm node_modules -rf

RUN npm install

RUN npx prisma generate

RUN npm run build

CMD ["node", "dist/index.js"]
