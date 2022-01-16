https://docs.mongodb.com/manual/reference/method/db.collection.update/#examples

# update
db.books.update(
   { _id: 1 },
   {
     $inc: { stock: 5 },
     $set: {
       item: "ABC123",
       "info.publisher": "2222",
       tags: [ "software" ],
       "ratings.1": { by: "xyz", rating: 3 }
     }
   }
)

# updateOne


# upsert=true (update & insert)
db.books.update(
   { item: "ZZZ135" },   // Query parameter
   {                     // Replacement document
     item: "ZZZ135",
     stock: 5,
     tags: [ "database" ]
   },
   { upsert: true }      // Options
)

# aggregation
db.members.update(
   { },
   [
      { $set: { status: "Modified", comments: [ "$misc1", "$misc2" ], lastUpdate: "$$NOW" } },
      { $unset: [ "misc1", "misc2" ] }
   ],
   { multi: true }
)

# $[<identifier>]
{ $or: [{"x.a": {$gt: 85}}, {"x.b": {$gt: 80}}] }
{ $and: [{"x.a": {$gt: 85}}, {"x.b": {$gt: 80}}] }
{ "x.a": { $gt: 85 }, "x.b": { $gt: 80 } }

# arrayFilters
db.students.update(
   { grades: { $gte: 100 } },
   { $set: { "grades.$[element]" : 100 } },
   {
     multi: true,
     arrayFilters: [ { "element": { $gte: 100 } } ]
   }
)
db.students2.update(
   { },
   { $set: { "grades.$[elem].mean" : 100 } },
   {
     multi: true,
     arrayFilters: [ { "elem.grade": { $gte: 85 } } ]
   }
)

# hint
db.members.createIndex( { status: 1 } )
db.members.createIndex( { points: 1 } )
db.members.update(
   { points: { $lte: 20 }, status: "P" },     // Query parameter
   { $set: { misc1: "Need to activate" } },   // Update document
   { multi: true, hint: { status: 1 } }       // Options
)

mongodump -h 139.180.137.102:27017 -u vinagex_user -p csdl@vng.c0m@15o791 -d vinagex -o /home/vinagex.com/public_html/bk

mongo --host 139.180.137.102 --port 27017


