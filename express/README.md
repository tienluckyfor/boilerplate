docker-compose exec workspace bash
cd /var/www/boilerplate/express;
node server.js


# sequelize
npx sequelize-cli init
npx sequelize-cli model:generate --force --name User --attributes firstName:string,lastName:string,email:string,username:string,password:string
npx sequelize-cli db:migrate
npx sequelize-cli db:migrate:undo:all

npx sequelize-cli seed:generate --name demo-user
npx sequelize-cli db:seed:all
