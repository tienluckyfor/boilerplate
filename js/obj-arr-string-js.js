// obj to string
obj = { name: "John", age: 30, city: "New York" };
string = JSON.stringify(obj);

JSON.stringify(item ?? `-`).replace(/^"|"$/g, "")

// string to object
str = '{ "name":"John", "age":30, "city":"New York"}'
obj = JSON.parse(str);

// string to array
str = "How are you doing today?"
arr = str.split(" ")

// obj empty
Object.entries(objectToCheck).length === 0