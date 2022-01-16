# setup ssl

https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx
https://dash.cloudflare.com/7fdcaf0fdb905e9e1362a819945d9b96/gokulegend.com/ssl-tls
SSL/TLS encryption mode is Full
// install
sudo apt-get update
sudo apt-get install software-properties-common
sudo add-apt-repository universe 
sudo add-apt-repository ppa:certbot/certbot 
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx

// add ssl site
sudo certbot --nginx -d api-v2.ppe.edu.vn -d www.api-v2.ppe.edu.vn
sudo certbot renew --dry-run

// list ssl site
certbot certificates

// remove ssl site
sudo certbot delete --cert-name ppe.edu.vn
vi /etc/nginx/sites-enabled/ppe.edu.vn.conf 
remove these lines ssl config

// log ssl
/var/log/letsencrypt/letsencrypt.log