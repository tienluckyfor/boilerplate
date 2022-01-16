# install on Ubuntu 18.04
```
cd ~
curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs
// check version
nodejs -v
npm -v
sudo apt install build-essential
```

# running
```
https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-18-04#step-2-%E2%80%94-creating-a-nodejs-application
node hello.js
curl http://localhost:3000
```

# install pm2
```
sudo npm install pm2@latest -g
pm2 start hello.js
pm2 stop hello.js
pm2 list
```

# nginx
```
vi /etc/nginx/sites-enabled/chatcord.codeby.com.conf 

server {
    server_name chatcord.codeby.com;
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
service nginx restart
```
