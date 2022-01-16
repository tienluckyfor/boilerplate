# docs
https://devhints.io/react

# create reactjs
npx create-react-app [name]
cd [name]
npm start
mkdir -p src/assets src/components src/pages src/slices 
npm i react-router-dom react-number-format moment
npm i react-redux @reduxjs/toolkit

# package.json
"start": "react-scripts start",
->
"start": "PORT=3011 react-scripts start",

# .env
vi .env
SKIP_PREFLIGHT_CHECK=true

# css react
// src/assets
import "./assets/css/material-icons.css"
import "./assets/css/tailwind-output.css"

[name]
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── components (mkdir) 
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js

# lifecycle
```
1. Mounting (constructor, static getDerivedStateFromProps, render and componentDidMount)

2. Updating (static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate and componentDidUpdate)

3. Unmounting (componentWillUnmount)

4. Error Handling (static getDerivedStateFromError and componentDidCatch)