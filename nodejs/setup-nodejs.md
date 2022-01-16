# setup nodejs backend
mkdir [my-project]; cd [my-project]
npm init -y

npm install nodemon --save-dev
npm install @babel/core @babel/node --save-dev
npm install @babel/preset-env --save-dev
npm install dotenv --save

// package.json
"start": "nodemon --exec babel-node src/index.js",

// .babelrc
{
  "presets": [
    "@babel/preset-env"
  ]
}

// .env
MY_SECRET=mysupersecretpassword

cd src; vi index.js
// src/index.js
import 'dotenv/config';
console.log('Hello Node.js project.');
console.log(process.env.MY_SECRET);

# upgrade node
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
sudo apt-get install -y nodejs