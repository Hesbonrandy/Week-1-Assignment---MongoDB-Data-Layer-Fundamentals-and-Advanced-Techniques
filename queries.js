// ===== BASIC CRUD =====
// Find all Fantasy books
db.books.find({ genre: "Fantasy" })

// Find books published after 2000
db.books.find({ published_year: { $gt: 2000 } })

// Find books by J.K. Rowling
db.books.find({ author: "J.K. Rowling" })

// Update price of "1984"
db.books.updateOne({ title: "1984" }, { $set: { price: 11.50 } })

// Delete "The Great Gatsby"
db.books.deleteOne({ title: "The Great Gatsby" })


// ===== ADVANCED QUERIES =====
// In stock AND published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })

// Show only title, author, price
db.books.find({ genre: "Fantasy" }, { title: 1, author: 1, price: 1, _id: 0 })

// Sort by price (low to high)
db.books.find().sort({ price: 1 })

// Sort by price (high to low)
db.books.find().sort({ price: -1 })

// Page 1 (first 5 books)
db.books.find().limit(5).skip(0)

// Page 2 (next 5 books)
db.books.find().limit(5).skip(5)


// ===== AGGREGATION =====
// Average price by genre
db.books.aggregate([ { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } } ])

// Author with most books
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
])

// Count books by decade
db.books.aggregate([
  { $addFields: { decade: { $multiply: [ { $floor: { $divide: ["$published_year", 10] } }, 10 ] } } },
  { $group: { _id: "$decade", total: { $sum: 1 } } },
  { $sort: { _id: 1 } }
])


// ===== INDEXING =====
db.books.createIndex({ title: 1 })
db.books.createIndex({ author: 1, published_year: 1 })

// Check if index is used
db.books.find({ title: "1984" }).explain("executionStats")