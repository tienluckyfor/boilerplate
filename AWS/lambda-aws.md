# setup lambda layers
mkdir -p LambdaLayers/DemoLayer/nodejs
cd LambdaLayers/DemoLayer/nodejs
npm init -y
npm install --save moment
cd ..
zip -r demoLayer.zip ./*

https://ap-northeast-1.console.aws.amazon.com/lambda/home?region=ap-northeast-1#/create/layer
Name (DemoLayer), Runtimes (Node.js 12.x)
https://ap-northeast-1.console.aws.amazon.com/lambda/home?region=ap-northeast-1#/create/function
Name (DemoWithLayer)
Function code > index.js
```
const moment = require('moment')
exports.handler = async (event) => {
   let momentNow = moment.now()
   const response = {
       statusCode: 200,
       body: JSON.stringify({momentNow})
   }
   return response
};
```
Function code > Deploy
Function code > Test > Name (Test) > Create
Designer > Layes > Add a layer
Choose a layer (Custom layers)

scrollTop > Test (Button)