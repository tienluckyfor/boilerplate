
php artisan migrate:refresh
php artisan passport:install

php artisan migrate:refresh; php artisan passport:install

# tamquoc_be
ssh root@167.99.70.219
cd /var/www/html/tamquoc; git pull;

.env
DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=tamquoc_db
DB_USERNAME=testuser
DB_PASSWORD=password

MAIL_MAILER=smtp
MAIL_HOST=smtp.sendgrid.net
MAIL_PORT=465
MAIL_USERNAME="apikey"
MAIL_PASSWORD="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"
MAIL_ENCRYPTION=SSL
MAIL_FROM_NAME="noreply"
MAIL_FROM_ADDRESS=from@codeby.com

# tamquoc_fe
cd /var/www/html/tamquoc/re-search-react-js; npm run build

/var/www/html/tamquoc/re-search-react-js/src/index.js
window.$api = `http://tamquoc_be.codeby.com/api`
window.$asset = `http://ppe.test`
window.$admin = `http://tamquoc_be.codeby.com`
window.$home = `http://tamquoc_fe.codeby.com`

# front-end
ssh root@167.99.70.219
git clone https://tien-luckyfor@bitbucket.org/tien-luckyfor/front-end.git front-end.git
kDaSJWem5tZeSHRWprAc

/var/www/html/front-end.git/tamquoc
cd /var/www/html/front-end.git; git pull

git clone https://tien-luckyfor@bitbucket.org/tien-luckyfor/tamquoc.git
