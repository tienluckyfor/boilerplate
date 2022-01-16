# socket 
cd /var/www/RTC-Web; git pull; forever restartall
# phpMyadmin
testuser/vantien123
http://165.22.62.3:88/index.php
http://188.166.245.96:88/index.php

ssh root@165.22.62.3
ssh root@188.166.245.96

# https://jp.ppe.edu.vn
# https://jp-be.ppe.edu.vn

cd /var/www/jp.smile-eye-be; git pull origin sjp;
cd /var/www/smile-eyes-be; git pull origin sjp;

cd /var/www/smile-eyes-fe; git pull origin sjp; npm i --legacy-peer-deps; npm run build; npm run after-build;

git remote set-url origin https://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@github.com/PPEProjects/bash-script.git
git clone https://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@github.com/PPEProjects/smile-eye-be.git

# https://stag.ppe.edu.vn
# https://stag-be.ppe.edu.vn
cd /var/www/stag.smile-eye-be;
git pull origin stag;

cd /var/www/stag.smile-eye-fe;
git pull origin stag; npm i; npm run build; npm run after-build;
