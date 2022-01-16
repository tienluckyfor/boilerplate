# install WP-CLI
```
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
php wp-cli.phar --info
chmod +x wp-cli.phar
sudo mv wp-cli.phar /usr/local/bin/wp
wp --info
```

# download and install WordPress
wp core download --path=nhacsong.test
cd nhacsong.test
// not avaiable for laradock
wp config create --dbname=wpclidemo --dbuser=root --prompt=dbpass
wp db create
wp core install --url=wpclidemo.dev --title="WP-CLI" --admin_user=wpcli --admin_password=wpcli --admin_email=info@wp-cli.org
wp plugin update --all
