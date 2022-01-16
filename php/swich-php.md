# https://github.com/jupeter/clean-code-php#introduction

# nginx ubuntu
sudo update-alternatives --config php
// list of php version avaible
sudo service nginx restart

# php 7.2 --> php 7.3
sudo add-apt-repository ppa:ondrej/php
sudo apt update
sudo apt install php7.3
sudo apt install php8.0 

# php 7.4 --> php 7.3
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update
sudo apt-get install php7.3
sudo apt-get install php7.3-cli php7.3-common php7.3-json php7.3-opcache php7.3-mysql php7.3-mbstring  php7.3-zip php7.3-fpm php7.3-intl php7.3-simplexml
sudo a2dismod php7.4
sudo a2enmod php7.3
sudo service apache2 restart
sudo update-alternatives --set php /usr/bin/php7.3
sudo update-alternatives --set phar /usr/bin/phar7.3
sudo update-alternatives --set phar.phar /usr/bin/phar.phar7.3
sudo update-alternatives --set phpize /usr/bin/phpize7.3
sudo update-alternatives --set php-config /usr/bin/php-config7.3