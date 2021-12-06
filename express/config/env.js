require('rootpath')();
const dotenv = require('dotenv');

dotenv.config({
    path: process.env.NODE_ENV
})
module.exports = {
    DB_HOST: process.env.DB_HOST,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    PORT: process.env.PORT,
}