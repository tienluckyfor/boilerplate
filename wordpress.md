
# plugin dev
docker-compose exec workspace bash
apt update
apt install wget

cd /var/www/codeby.com/wordpress-train/wordpress/wp-content/plugins

wget -O boilerplate-generator.sh https://raw.githubusercontent.com/sumitpore/mvc-plugin-boilerplate-for-wordpress/master/boilerplate-generator.sh && bash boilerplate-generator.sh

cp -fR generated-plugin/example-me/ ./