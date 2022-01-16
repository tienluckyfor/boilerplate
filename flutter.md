## install

```
cd /Users/phuocnguyen/Jobs
mkdir flutter
git clone https://github.com/flutter/flutter.git -b stable
flutter precache
```
```
nano .zsh (Will open command line editor)
export PATH="$PATH:[PATH_TO_FLUTTER_GIT_DIRECTORY]/flutter/bin:$PATH"
Save file by "Control" + "O" then Press "return"
"Control" + "X" to exit
Relaunch Terminal.
echo $PATH
```