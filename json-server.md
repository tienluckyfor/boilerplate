# setup json-server
```
sudo npm install -g json-server

// fakerjs
npm init -y
npm i faker

// start
npm run db
```

# json file
```
// run
json-server --watch db.json

// db.json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

# js file
```
//run 
json-server --watch db.js

//db.js
var faker = require('faker');
faker.locale = 'vi';
module.exports = function() {
	var students = [];
	for (var i = 0; i < 100; i++) {
		students.push({
			id: i,
			name: faker.name.firstName(),
			avatar: faker.internet.avatar()
		});
	}
	return {
		students: students
	};
};
```
# using with reactjs
```
// package.json
"scripts": {
    "start": "react-scripts start",
-->
"scripts": {
    "db": "json-server --watch db.js --port 3003",
    "start": "PORT=3004 react-scripts start",
    
```
# using
```
# Filter
GET /posts?title=json-server&author=typicode
GET /posts?id=1&id=2
GET /comments?author.name=typicode
# Paginate
GET /posts?_page=7
GET /posts?_page=7&_limit=20
# Sort
GET /posts?_sort=views&_order=asc
GET /posts/1/comments?_sort=votes&_order=asc
GET /posts?_sort=user,views&_order=desc,asc
# Slice
GET /posts?_start=20&_end=30
GET /posts/1/comments?_start=20&_end=30
GET /posts/1/comments?_start=20&_limit=10
# Operators
GET /posts?views_gte=10&views_lte=20
GET /posts?id_ne=1
GET /posts?title_like=server
GET /posts?q=internet
```
