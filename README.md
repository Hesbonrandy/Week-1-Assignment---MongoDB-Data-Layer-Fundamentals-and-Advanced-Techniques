# PLP Bookstore – MongoDB 

This project demonstrates core MongoDB operations including CRUD, advanced queries, aggregation pipelines, and indexing using a `books` collection in the `plp_bookstore` database.

All data is stored in **MongoDB Atlas** (cloud), not localhost.

---

## 📁 Project Files

- **`insert_books.js`**  
  Inserts 10 sample book documents into the `plp_bookstore.books` collection in MongoDB Atlas.

- **`queries.js`**  
  Contains all required MongoDB Shell (`mongosh`) commands for:
  - Basic CRUD operations
  - Advanced queries (filtering, projection, sorting, pagination)
  - Aggregation pipelines
  - Index creation and performance analysis

- **`screenshot.png`**  
  Screenshot of the `books` collection in MongoDB Atlas showing sample data.

---

## 🚀 How to Run

### Prerequisites
- [Node.js](https://nodejs.org/) installed (v14+)
- A **MongoDB Atlas account** with:
  - A free shared cluster
  - A database user with **read and write** privileges
  - Network access allowed from your IP (or "Allow Access from Anywhere")

### Step 1: Configure Connection
1. In `insert_books.js`, update the `uri` variable with your **Atlas connection string**:
   ```js
   const uri = "mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/plp_bookstore";
