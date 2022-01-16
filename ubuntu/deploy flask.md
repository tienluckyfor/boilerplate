## install flask  
#Ubuntu 18.04 x64
```
sudo apt update
cd /home
git clone https://github.com/abalarin/Flask-on-Linode.git flask_app_project

scp -r flask_app_project/ user@192.0.2.0:/home

sudo apt install nginx
sudo nano /etc/nginx/sites-enabled/flask_app
//file flask_app
sudo unlink /etc/nginx/sites-enabled/default
sudo nginx -s reload

sudo apt install python3
sudo apt install python3-pip
cd /home/flask_app_project
pip3 install -r flask_app/requirements.txt

sudo apt install gunicorn3
gunicorn3 --workers=3 flask_app:app
http://192.0.2.0

```

## install supervisord
```
sudo apt install supervisor
sudo nano /etc/supervisor/conf.d/flask_app.conf
//file flask_app.conf

sudo mkdir /var/log/flask_app
sudo touch /var/log/flask_app/flask_app.out.log
sudo touch /var/log/flask_app/flask_app.err.log

sudo supervisorctl reload
```