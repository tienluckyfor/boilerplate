# read pname
# ps -ef | grep -v grep | grep $pname | awk '{print $2}'
read pname
ps -ef | awk -v p=${pname} '$8 ~ p { print $2A$2 }'