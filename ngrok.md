# create account
https://dashboard.ngrok.com/get-started

# download sorfware 
https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-darwin-amd64.zip

# install & auth
unzip /path/to/ngrok.zip
// free
./ngrok authtoken 1ZwUfO3A3sAJ3iidSPLP48eyJrf_5XyrhMbHN5d4yurEJLVNx
// fee
./ngrok authtoken 1g7FdyPfbPSue2D7QDWWYOTNQEE_73BT293aQP8hxEHKmdyxC

# run
cd /Users/phuocnguyen/jobs/fireapps; 
// free
./ngrok http 80
// fee
./ngrok http -bind-tls=true -subdomain=tiennv 80
./ngrok http -bind-tls=true -subdomain=tiennv1 7000