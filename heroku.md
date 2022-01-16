# install
brew tap heroku/brew && brew install heroku
heroku --version
heroku login

# 
heroku create
heroku rename diamondsh
heroku keys:add

# 
git push heroku master