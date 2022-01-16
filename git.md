# cherry pick
Current Branch 
dialog Branches > Local Branches > master (checked)
selected these commit on master > cherry pick

# merge git
// case 1
branchA > branchB
In branchB > VCS > Git > merge changes > select branchA for branches to merge > select resolve for strategy > merge.
// case 2

# save git password
git config --global credential.helper store
git pull

# save git info
git config --global user.name "Tien-VPS"
git config --global user.email "tien.luckyfor@gmail.com"
git config --global user.password "kDaSJWem5tZeSHRWprAc"

git config --global user.name "TienNV-PPE"
git config --global user.email "tiennv.ppe@gmail.com"
git config --global user.password "gmVT123!@#"

# search branch by name
git branch --all | grep shop

# discard all change
git reset --hard

# discard path
git checkout -- re-search-react-js/package-lock.json

# restoring deleted file
git checkout HEAD filename

# undo git add
git reset

# undo last commit
git reset --soft HEAD~1

# release delete master
master -> master_backup_27_10
delete branch master
uat -> master

# git check file delete by path
git log -p -- app/Jobs/ --graph > gitlog-graph.log
git log --diff-filter=D --summary > gitlog-delete.log

# change git info (password -> personal token)
git config --global --replace-all remote.origin.url ""
git config --global --unset remote.origin.url
git config --system --unset user.password
git config --local --unset user.password
git config -l

git remote add origin "https://TienNV-PPE@github.com/PPEProjects/ppe-core.git";
git config --local --replace-all remote.origin.url "https://TienNV-PPE@github.com/PPEProjects/smile-eye-be.git"

git config --global --unset user.password;
git config --local --unset user.password;
git config --system --unset user.password

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

git push origin develop  

git remote rm origin
git remote add origin 'https://TienNV-PPE@github.com/PPEProjects/bash-script.git'

vi ~/.gitconfig
url = https://TienNV-PPE@github.com/PPEProjects/ppe-core.git
fetch = +refs/heads/*:refs/remotes/origin/*

# revert 
git checkout [commit ID] -- path/to/file
git checkout 025c2849 -- src/components/Media/ThumbChecked.js
