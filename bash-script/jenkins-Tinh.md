### Author Doan Van Tinh

### vps : ubuntu 18.04

access to vps

```
ssh root@128.199.95.157
```

update libary

```
sudo apt update
```

search libary

```
sudo apt search jdk
```

install jdk

```
sudo apt install openjdk-8-jdk
```

check version java

```
java -version
```

add key jenkins in to local

```
wget -q -O - https:pkg.jenkins.io/debian/jenkins-ci.org.key | sudo apt-key add -
```

add package in sources.list

```
sudo sh -c 'echo deb http:pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
```

update apt

```
sudo apt-get update
```

install jenkins

```
sudo apt-get install jenkins
```

get password for localhost:8080

```
cat /var/lib/jenkins/secrets/initialAdminPassword
```

install nginx

```
sudo apt-get install nginx
```

stop nginx

```
sudo systemctl stop nginx
```

start ngnix

```
sudo systemctl start nginx
```

restart nginx

```
sudo systemctl restart nginx
```

check what run on port 80

```
sudo lsof -i:80
```

comman check list package

```
apt list --installed
```

install php

```
sudo apt-get install nginx php7.4-fpm
```

if can's install php then run this

```
sudo apt-get update
sudo apt -y install software-properties-common
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update
```

install composer

```
sudo apt install composer
```

after clone

```
composer install
```

copy .env

```
cp .env.example .env
```

generate key

```
php artisan key:generate
```

give permission

```
chmod -R 777 /var/www/dvtinh.com
```

cofig file domain in

```
nano /etc/nginx/sites-available/{domain}
```

```
server {
        listen 82;
        listen [::]:82;

        root /var/www/dvtinh.com/html/PPE_happy_eyes/public;
        index index.php;

        server_name dvtinh.ppe.edu.vn www.dvtinh.ppe.edu.vn;

       location / {
        add_header "Access-Control-Allow-Origin"  *;
        try_files $uri $uri/ /index.php$is_args$args;
        }
    location ~* \.php$ {
      fastcgi_pass unix:/run/php/php7.4-fpm.sock;
      include         fastcgi_params;
      fastcgi_param   SCRIPT_FILENAME    $document_root$fastcgi_script_name;
      fastcgi_param   SCRIPT_NAME        $fastcgi_script_name;
    }
}
```

==> for laravel project and remember check version php

link this file to site-enable

```
ln -S /etc/nginx/sites-available/{domain} /etc/nginx/sites-enabled/
```

let nginx check

```
nginx -t
```

result will be

```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

restart ngnix

```
systemctl restart nginx
```

then check your domain
