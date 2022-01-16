# insert mongo
db.products.insert( { item: "card", qty: 15 } )
db.products.insert( { _id: 10, item: "box", qty: 20 } )
db.products.insert(
   [
     { _id: 11, item: "pencil", qty: 50, type: "no.2" },
     { item: "eraser", qty: 25 }
   ]
)

# insert many
try {
   db.products.insertMany( [
      { _id: 10, item: "large box", qty: 20 },
      { _id: 11, item: "small box", qty: 55 }
   ], { ordered: false } );
} catch (e) {
   print (e);
}

# insert one
try {
   db.products.insertOne(
       { "item": "envelopes", "qty": 100, type: "Self-Sealing" },
       { writeConcern: { w : "majority", wtimeout : 100 } }
   );
} catch (e) {
   print (e);
}

# perform insert
// unordered
db.products.insert(
   [
     { _id: 20, item: "lamp", qty: 50, type: "desk" },
     { _id: 22, item: "bulk", qty: 100 }
   ],
   { ordered: false }
)
// Bulk Insert
var bulk = db.items.initializeUnorderedBulkOp();
bulk.insert( { _id: 1, item: "abc123", defaultQty: 100, status: "A", points: 100 } );
bulk.insert( { _id: 2, item: "ijk123", defaultQty: 200, status: "A", points: 200 } );
bulk.execute();