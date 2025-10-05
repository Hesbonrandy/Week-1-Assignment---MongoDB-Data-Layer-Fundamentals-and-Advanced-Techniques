// insert_books.js
const { MongoClient } = require('mongodb');

// ATLAS CONNECTION STRING
const uri = "mongodb+srv://hesbonomondi66_db_user:Hesbon@123@cluster0.dzfyum0.mongodb.net/plp_bookstore";

// Database and collection names
const dbName = 'plp_bookstore';
const collectionName = 'books';

async function insertBooks() {
  const client = new MongoClient(uri);

  try {
    // Connect to MongoDB Atlas
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas!");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Delete existing books (optional, to avoid duplicates)
    await collection.deleteMany({});
    console.log("Cleared existing books.");

    // Define 10+ books
    const books = [
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        published_year: 1960,
        price: 12.99,
        in_stock: true,
        pages: 324,
        publisher: "J.B. Lippincott & Co."
      },
      {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        published_year: 1949,
        price: 10.99,
        in_stock: true,
        pages: 328,
        publisher: "Secker & Warburg"
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        published_year: 1925,
        price: 9.99,
        in_stock: false,
        pages: 180,
        publisher: "Scribner"
      },
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        published_year: 1813,
        price: 8.99,
        in_stock: true,
        pages: 432,
        publisher: "T. Egerton"
      },
      {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        published_year: 1937,
        price: 14.99,
        in_stock: true,
        pages: 310,
        publisher: "George Allen & Unwin"
      },
      {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        published_year: 1997,
        price: 16.99,
        in_stock: true,
        pages: 309,
        publisher: "Bloomsbury"
      },
      {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Fiction",
        published_year: 1951,
        price: 11.99,
        in_stock: false,
        pages: 277,
        publisher: "Little, Brown and Company"
      },
      {
        title: "Brave New World",
        author: "Aldous Huxley",
        genre: "Dystopian",
        published_year: 1932,
        price: 13.49,
        in_stock: true,
        pages: 268,
        publisher: "Chatto & Windus"
      },
      {
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Fiction",
        published_year: 1988,
        price: 15.99,
        in_stock: true,
        pages: 208,
        publisher: "HarperCollins"
      },
      {
        title: "Dune",
        author: "Frank Herbert",
        genre: "Science Fiction",
        published_year: 1965,
        price: 17.99,
        in_stock: true,
        pages: 688,
        publisher: "Chilton Books"
      }
    ];

    // Insert books
    const result = await collection.insertMany(books);
    console.log(`✅ Successfully inserted ${result.insertedCount} books into '${dbName}.${collectionName}'!`);

  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
    console.log("🔌 Connection closed.");
  }
}

// Run the function
insertBooks();