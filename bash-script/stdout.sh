# fooVar=$(who)
# echo $fooVar

fooVar=$(who | grep tty)
echo $fooVar