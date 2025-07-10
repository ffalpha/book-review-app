// index.js
const api = require('./services/externalAPI');

async function runTests() {
  // console.log("Task 10: Get all books (Async Callback)");
  // await api.getAllBooks();        // Task 10

  // console.log("\nTask 11: Get book by ISBN (Promises)");
  // api.getBookByISBN('111');       // Task 11

  // console.log("\nTask 12: Get books by Author");
  // api.getBooksByAuthor('Hend ali')
  //   .then(res => console.log(res.data))
  //   .catch(err => console.error(err));

  console.log("\nTask 13: Get books by Title");
  await api.getBooksByTitle('Node'); // Task 13
}

runTests();
