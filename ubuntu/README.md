## Server specs
```
lscpu
free -h 
``` 
## watch
```
watch -n 1 'ls -lh /data/sources/sohead_api/storage/logs/'
watch -n 1 'ls -lh /data/sources/sohead_api/public/csv/'
```
## cat
```
cd /data/sources/sohead_api/storage/logs
// cat line
sed -n 1p laravel.log
sed -n 3p laravel.log
sed -n '69,75p' laravel.log
```

## WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!
```
ssh-keygen -R 45.77.248.164
ssh root@45.77.248.164
```

## csv line
```
cd /data/sources/sohead_api/public/csv
cat /data/sources/sohead_api/public/csv/* | wc -l
cat ss.webhook_create.csv | wc -l && cat ss.webhook_update.csv | wc -l && cat ss.webhook_delete.csv | wc -l
```

## 777
```
// check 777
ls -l
drwxrwxrwx --> 777
-rwxrwxrwx --> 777
-rwxrw-r--
drwxr-xr-x
(-) --> File type: "-" a file, "d" a directory
(rwx) --> Read, write, execute permissions for the owner of the file
(rw-) --> Read, write, execute permissions for members of the group owning the file
(r--) --> Read, write, execute permissions for all other users
// set 777
sudo chmod -R 777 /var/www
umask u+rwx,g+rwx,o+rwx & touch laravel.log
chmod u+rwx file1 --> Owner
chmod u+rwx file1 --> Group
chmod o+rwx file1 --> Other
chmod a+rwx file1 --> All users
// 
mkdir -m 777 dirname
```
## all users
```
cut -d: -f1 /etc/passwd
```

## password
```
sudo passwd
VanTien123!@#
```

## port
```
// check port current
netstat -tulpn | grep ssh
sudo vi /etc/ssh/sshd_config
#Port 22 --> Port 23
systemctl restart sshd
```

## swap
```
//check
free -h
df -h
sudo swapon --show
ls -lh /swapfile

sudo fallocate -l 1G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

sudo cp /etc/fstab /etc/fstab.bak
```
## remove swap
```
sudo swapoff /swapfile      
sudo vim /etc/fstab
/swapfile --> #/swapfile
sudo rm -f /swapfile
```

## locate
```

```