ssh root@188.166.184.92

# http://codeby.com
cd /var/www/mockapi/siteCodeby/; git pull

# http://be-mockapi.codeby.com
cd /var/www/mockapi/; git pull

# http://be-storage.codeby.com
npm run migrate-dev; npm run seed-dev
cd /var/www/mockapi/storageCodeby; git pull
forever restartall;
forever stopall; forever start -c "npm run nodemon-dev" ./

# http://be-comment.codeby.com
cd /var/www/mockapi/commentCodeby; git pull
cd /var/www/mockapi/apiCodeby-express; git pull
forever stopall; forever start -c "npm run dev-socket" ./

# http://api.codeby.com
# http://188.166.184.92:3011
cd /var/www/mockapi/mockapi-fe/; git pull; npm i --legacy-peer-deps; npm run build:dev

git clone https://tienluckyfor@github.com/tienluckyfor/mockapi.git

# http://188.166.184.92:88/sql.php?server=1&db=mockapi_db&table=rallydatas&pos=0

git remote add origin https://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@github.com/tienluckyfor/laravel-api.git

git remote set-url origin https://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@github.com/tienluckyfor/fastwork.git

git clone https://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@github.com/tienluckyfor/package.git

git clone https://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@github.com/CloudOpsby/oriico-fe.git
git clone https://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@github.com/CloudOpsby/oriico-be.git