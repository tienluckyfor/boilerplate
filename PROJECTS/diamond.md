
# diamond.codeby.com
ssh root@167.99.70.219
http://diamond.codeby.com
cd /var/www/html/diamond.codeby.com/; git pull

php artisan config:cache; php artisan config:clear;

# db
mysqldump -u root -p diamond_db > /var/www/html/diamond.codeby.com/public/diamond_db.sql

# .env
APP_NAME=Studio
APP_ENV=production
APP_KEY=base64:cVrlGjsc9lWW/tpl+qnd5EXNcl7LHQ5PU9TGK5MWMrI=
APP_DEBUG=false
APP_URL=http://diamond.codeby.com

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=diamond_db
DB_USERNAME=testuser
DB_PASSWORD=password
