mysql -u root -p
create database dev_haydzo_db;
GRANT ALL PRIVILEGES ON dev_haydzo_db.* TO 'testuser';
\q
mysqldump haydzo_db | mysql dev_haydzo_db