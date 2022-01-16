sudo apt update && sudo apt upgrade

// nginx
sudo apt install nginx

// mysql
sudo apt install mariadb-server php-mysql
sudo mysql -u root
quit
sudo mysql_secure_installation (Y)
vantien123

// mysql user & db
CREATE DATABASE ppe_training_be_db;
CREATE USER 'testuser' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON ppe_training_be_db.* TO 'testuser';

// php
sudo apt install php-fpm
sudo sed -i 's/;cgi.fix_pathinfo=1/cgi.fix_pathinfo=0/g' /etc/php/7.2/fpm/php.ini

// setup domain
sudo mkdir -p /var/www/html/dienminhphu.com/public_html
sudo cp /etc/nginx/sites-enabled/default /etc/nginx/sites-available/dienminhphu.com.conf
> [dienminhphu.com.conf file](dienminhphu.com.conf)
vim /etc/nginx/sites-available/dienminhphu.com.conf
sudo ln -s /etc/nginx/sites-available/dienminhphu.com.conf /etc/nginx/sites-enabled/

// Enable Firewall
sudo ufw app info "Nginx Full"
sudo ufw allow in "Nginx Full"

// reload php
sudo systemctl restart php7.2-fpm

// reload nginx
sudo nginx -s reload
// test nginx
sudo nginx -t

// mysql
service mysql restart

// test lemp
> [test.php file](test.php)

// php config
vim /etc/php/7.2/fpm/php.ini