db.members.insertMany([
   { "_id" : 1, "member" : "abc123", "status" : "P", "points" :  0,  "misc1" : null, "misc2" : null },
   { "_id" : 2, "member" : "xyz123", "status" : "A", "points" : 60,  "misc1" : "reminder: ping me at 100pts", "misc2" : "Some random comment" },
   { "_id" : 3, "member" : "lmn123", "status" : "P", "points" :  0,  "misc1" : null, "misc2" : null },
   { "_id" : 4, "member" : "pqr123", "status" : "D", "points" : 20,  "misc1" : "Deactivated", "misc2" : null },
   { "_id" : 5, "member" : "ijk123", "status" : "P", "points" :  0,  "misc1" : null, "misc2" : null },
   { "_id" : 6, "member" : "cde123", "status" : "A", "points" : 86,  "misc1" : "reminder: ping me at 100pts", "misc2" : "Some random comment" }
])

db.members.createIndex( { status: 1 } )
db.members.createIndex( { points: 1 } )

# collection scan -> sort -> project
db.getCollection('members').find().sort({member: -1}).explain()
"winningPlan" : {
    "stage" : "COLLSCAN",
    "direction" : "forward"
},

# index scan -> fetch -> project
db.getCollection('members').find({ points: {$gte: 10}}).sort({points: -1}).explain()
"stage" : "FETCH",
    "inputStage" : {
        "stage" : "IXSCAN",
        "keyPattern" : {
            "points" : 1.0
        },
...        
"indexBounds" : {
    "points" : [ 
        "[inf.0, 10.0]"
    ]
}

# executionStats
db.getCollection('members').find().sort({member: -1}).explain("executionStats")
db.getCollection('members').find({points:{$gte:10}}).sort({points: -1}).explain("executionStats")
"executionStats" : {
    "nReturned" : 6,
    "executionTimeMillis" : 0,
    "totalKeysExamined" : 0,
    "totalDocsExamined" : 6,
    ...
    "sortPattern" : {
                "member" : -1
            },
            "memLimit" : 104857600,
    ...
    "works" : 8,
    "advanced" : 6,
    "needTime" : 1,
    "isEOF" : 1,

# allPlansExecution
db.getCollection('members').find({points:{$gte:10}}).sort({points: -1}).explain("allPlansExecution")
db.getCollection('members').find().sort({member: -1}).explain("allPlansExecution")


