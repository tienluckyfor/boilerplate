# copy & paste
cmd-opt-shift-v  to paste without formatting

# get all size
du -h -d 1 /Users/phuocnguyen/Jobs/codeby/projectmhdc

# termial
Last line : Fn + Left Arrow
First line : Fn + Right Arrow
Delete line : Ctrl + U

# user
phuoc.developerit@gmail.com
Admin@12345

# watch
while :; do clear; ls -lh /Users/phuocnguyen/Jobs/fireapps/sohead_api/storage/logs/; sleep 1; done
while :; do clear; ls -lh /Users/phuocnguyen/Jobs/fireapps/sohead_api/public/csv/; sleep 1; done
// track memory used
while :; do clear; vm_stat | perl -ne '/page size of (\d+)/ and $size=$1; /Pages\s+([^:]+)[^\d]+(\d+)/ and printf("%-16s % 16.2f Mi\n", "$1:", $2 * $size / 1048576);'; sleep 1; done

# copy all
cp -fR /Users/phuocnguyen/Jobs/boilerplate/express/* /Users/phuocnguyen/Jobs/codeby/e-duy/oriico-be
cp -fR /Users/phuocnguyen/Jobs/codeby/ppe1/* /Users/phuocnguyen/Jobs/codeby/ppe
cp -fR /Users/phuocnguyen/Jobs/codeby/init-projects/init-react-graphql-github-apollo/* /Users/phuocnguyen/Jobs/codeby/init-projects/init-react-graphql-tailwind-apollo 
cp -fR /var/www/jp.smile-eye-be/public/basic.example/ /var/www/html
cp -fR /Users/phuocnguyen/Jobs/resource/* /Users/phuocnguyen/Jobs/boilerplate-resource  
# kill port
sudo lsof -i :3001
kill -9 37435

ps -fA | grep python
501 90458 90452   0 10:23PM ttys006    0:00.00 grep python
kill 90458

kill -9 $( lsof -t -i:3000)  

# list file
ls -lh 
ls -lhS
ls -lSrh

# zsh compinit: insecure directories, run compaudit for list.
compaudit
sudo chown -R username:root /usr/local/share/zsh/site-functions
sudo chmod -R 755 /usr/local/share/zsh/site-functions