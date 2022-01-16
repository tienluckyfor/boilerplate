-- version
SELECT VERSION();

-- upgrade MariaDB 10.4 ubuntu
sudo apt-get remove mariadb-server
sudo apt-get install software-properties-common
sudo apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xF1656F24C74CD1D8
sudo add-apt-repository "deb [arch=amd64,arm64,ppc64el] http://mariadb.mirror.liquidtelecom.com/repo/10.4/ubuntu $(lsb_release -cs) main"
sudo apt update
sudo apt -y install mariadb-server mariadb-client

-- backup data & restore
mysqldump -u root -p haydzo_db > haydzo_db.sql
mysqldump -u root -p testdb > testdb.sql
mysqldump -u root -p [dbname] > [backupfile.sql]
mysql -u root -p [dbname] < [backupfile.sql]