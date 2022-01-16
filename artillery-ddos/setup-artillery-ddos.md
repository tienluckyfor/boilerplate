npm init -y
npm i moment
npm i faker

npm install -g artillery
artillery -V

# 10 virtual users * 20 request
artillery quick --count 10 -n 20 https://artillery.io/
artillery quick --count 10 -n 20 http://ce0e0f3a6db5.ngrok.io/abc

# run
artillery run hello.yml
DEBUG=http artillery run haydzo.yml
DEBUG=http:response artillery run haydzo.yml