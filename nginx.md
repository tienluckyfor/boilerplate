# add site

cd /etc/nginx/sites-enabled; ls -la
/var/www/html/ppe/public
// laravel 
vi tamquoc_be.codeby.com.conf
[](ubuntu/ppe.codeby.com.conf)

// wordpresss 
vi dienminhphu.com.conf
[](ubuntu/dienminhphu.com.conf)

// reactjs
vi tamquoc_fe.codeby.com.conf
[](ubuntu/ppe_fe.codeby.com.conf)

# restart nginx
service nginx restart
service nginx reload
sudo nginx -s reload

# check nginx conf file
nginx -t -c 1g.conf
nginx -t -c /etc/nginx/sites-enabled/ppe_fe1.codeby.com.conf

# logs nginx
tail -f /var/log/nginx/error.log
tail -f /var/log/nginx/access.log

# redirect 
server_name    codeby.com www.codeby.com;
return 301 https://www.facebook.com/profile.php?id=100042199030094;

# rewrite url
location ~ ^/avatars/ {
        rewrite ^/avatars/(.*)$ /storage/avatars/$1 last;
}
location ~ ^/covers/ {
    rewrite ^/covers/(.*)$ /storage/covers/$1 last;
}

# 413 Request Entity Too Large
vim /etc/nginx/sites-available/dienminhphu.com.conf
server {
    ...
    client_max_body_size 200M;
}
sudo nginx -s reload

# socketio
location /socket.io/ {
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_pass   http://localhost:86/socket.io/;
    }