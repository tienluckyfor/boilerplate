# Ubuntu 18.04
```
// check swap exits
sudo swapon --show
free -h
df -h
// create swap file
sudo fallocate -l 4G /swapfile
sudo chmod 600 /swapfile
// make swap
sudo mkswap /swapfile
sudo swapon /swapfile
// check again
sudo swapon --show
free -h
// permanent
sudo cp /etc/fstab /etc/fstab.bak
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
cat /proc/sys/vm/swappiness

```