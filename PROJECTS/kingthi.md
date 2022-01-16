
php artisan migrate:refresh
php artisan passport:install
php artisan migrate:refresh; php artisan passport:install

mysqldump tamquoc_db | mysql test_tamquoc_db
cp -r /var/www/html/tamquoc/public/files/images/* /var/www/html/test_tamquoc/public/files/images

# be.kingthi.com
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
MAIL_HOST=smtp.gmail.com
MAIL_PORT=465
MAIL_USERNAME=contact.kingthi.com@gmail.com
MAIL_PASSWORD=Kingthi@123
MAIL_ENCRYPTION=ssl
MAIL_FROM_ADDRESS=contact.kingthi.com@gmail.com
MAIL_FROM_NAME="${APP_NAME}"

# vn.kingthi.com
cd /var/www/html/tamquoc/re-search-react-js; npm run build

/var/www/html/tamquoc/re-search-react-js/src/index.js
window.$api = `https://be.kingthi.com/api`
window.$asset = `http://ppe.test`
window.$admin = `https://be.kingthi.com`
window.$home = `https://vn.kingthi.com`


# test-be.kingthi.com
ssh root@167.99.70.219
cd /var/www/html/test_tamquoc; git pull;

# test.kingthi.com
cd /var/www/html/test_tamquoc/re-search-react-js; npm run build

/var/www/html/test_tamquoc/re-search-react-js/src/index.js
window.$api = `http://test-be.kingthi.com/api`
window.$asset = `http://ppe.test`
window.$admin = `http://test-be.kingthi.com`
window.$home = `http://test.kingthi.com`