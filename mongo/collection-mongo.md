# getCollectionInfos
db.getCollectionInfos()
db.getCollectionNames()

# create collection
db.createCollection("students", { 
    indexOptionDefaults: {
        "name": 1
    }
})

# drop collection
db.students.drop()

# createIndex
db.students.createIndex({status: 1})
db.students.createIndexes(
  [{"$**": 1}],
  {
    "wildcardProjection": {
      "product_attributes.elements" : 0,
      "product_attributes.resistance" : 0
    }
  }
)
db.students.createIndexes([{ "manufacturer": 1}, { "category": 1 }],
   {collation: {locale: "fr", strength: 2}})

# getIndexes
db.students.getIndexes()

# dropIndex
db.students.dropIndex("catIdx")
db.students.dropIndex({"cat": -1})
db.students.dropIndexes([ "a_1_b_1", "a_1", "a_1__id_-1" ])

