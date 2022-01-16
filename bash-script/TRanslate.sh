# read foo
# var=$(echo $foo | tr "{a-z}" "{A-Z}")
#  # {a-z} Matches a through z
#  # {A-Z} matches A through Z
# echo $foo
# echo $var

echo "Type in: I love tars"
read foo
var=$(echo $foo | tr "t" "b")
echo $var