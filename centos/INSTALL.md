# centos 8
```
yum update -y​
```
## login
```
ssh root@139.180.191.6 -p 2124
vantien123
```
## change password
```
sudo passwd root
vantien123
```
## change port
```
vi /etc/ssh/sshd_config
Port 2124
iptables -I INPUT -p tcp --dport 2124 --syn -j ACCEPT
---
systemctl stop firewalld
systemctl mask firewalld
yum install iptables-services
systemctl enable iptables
service iptables save
---
semanage port -a -t ssh_port_t -p tcp 2124
firewall-cmd --add-port 2124/tcp --permanent
firewall-cmd --add-port 2124/tcp
service sshd restart
```
## install vpssim
```
curl http://get.vpssim.vn -o vpssim && sh vpssim
```

# bugs
```
WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!  
-> ssh-keygen -R 192.168.219.149
```

# wordpress
```
sudo chmod -R 0777 wp-content 
```