#!bin/bash

docker-compose up -d
sleep 12
docker-compose exec app npx prisma migrate deploy
