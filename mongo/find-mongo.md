https://docs.mongodb.com/manual/reference/bios-example-collection/

# query 
db.bios.find()
db.bios.find( { _id: 5 } )
db.bios.find( { "name.last": "Hopper" } )
db.bios.find(
   { _id: { $in: [ 5, ObjectId("507c35dd8fada716c89d0013") ] } }
)
db.bios.find( { birth: { $gt: new Date('1950-01-01') } } )
db.bios.find(
   { "name.last": { $regex: /^N/ } }
)
db.bios.find( { birth: { $gt: new Date('1940-01-01'), $lt: new Date('1960-01-01') } } )
db.bios.find( {
   birth: { $gt: new Date('1920-01-01') },
   death: { $exists: false }
} )

# query embedded
db.bios.find(
    { name: { first: "Yukihiro", last: "Matsumoto" } }
)
db.bios.find(
   {
     "name.first": "Yukihiro",
     "name.last": "Matsumoto"
   }
)

# query arrays
db.bios.find( { contribs: "UNIX" } )
db.bios.find( { contribs: { $in: [ "ALGOL", "Lisp" ]} } )
db.bios.find( { contribs: { $all: [ "ALGOL", "Lisp" ] } } )
db.bios.find( { contribs: { $size: 4 } } )

# query an array of documents
db.bios.find(
   { "awards.award": "Turing Award" }
)
db.bios.find(
   { awards: { $elemMatch: { award: "Turing Award", year: { $gt: 1980 } } } }
)

# specify fields
db.bios.find( { }, { _id: 0, name: 1, contribs: 1 } )
db.bios.find( { }, { name: 1, contribs: 1 } )
db.bios.find(
   { contribs: 'OOP' },
   { 'name.first': 0, birth: 0 }
)

# specify fields arrays
db.bios.find(
   { },
   { _id: 0, 'name.last': 1, contribs: { $slice: 2 } } 
)
db.bios.find(
   { },
   { _id: 0, name: { last: 1 }, contribs: { $slice: 2 } }
)

# aggregation 
db.bios.find(
   { },
   {
     _id: 0,
     name: {
        $concat: [
           { $ifNull: [ "$name.aka", "$name.first" ] },
           " ",
           "$name.last"
        ]
     },
     birth: 1,
     contribs: 1,
     awards: { $cond: { if: { $isArray: "$awards" }, then: { $size: "$awards" }, else: 0 } },
     reportDate: { $dateToString: {  date: new Date(), format: "%Y-%m-%d" } },
     reportBy: "hellouser123",
     reportNumber: { $literal: 1 }
   }
)

# cursor
var myCursor = db.bios.find( );
var myDocument = myCursor.hasNext() ? myCursor.next() : null;
if (myDocument) {
    var myName = myDocument.name;
    print (tojson(myName));
}

# sort
db.bios.find().sort( { name: 1 } )
db.bios.find({}, {name:1}).sort( { 'name.last': 1 } )
db.bios.find({}, {name:1}).sort( { 'name.last': -1 , 'name.aka': 1} )

# limit
db.bios.find().limit( 5 )

# forEach
db.bios.find().forEach( function(myDoc) { print( "user: " + myDoc.name.first ); } );

# search 
{"_id":{"$regex": "1:2:5310488576157"}}