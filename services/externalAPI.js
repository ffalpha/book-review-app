// services/externalAPI.js
const axios = require('axios');

async function getAllBooks() {
  try {
    const res = await axios.get('http://localhost:3000/books');
    console.log("📚 Books:", res.data);
  } catch (err) {
    console.error("❌ Error in getAllBooks:", err.message);
  }
}

function getBookByISBN(isbn) {
  axios.get(`http://localhost:3000/books/isbn/${isbn}`)
    .then(res => console.log("🔍 Book by ISBN:", res.data))
    .catch(err => console.error("❌ Error in getBookByISBN:", err.message));
}

function getBooksByAuthor(author) {
  return axios.get(`http://localhost:3000/books/author/${author}`);
}

async function getBooksByTitle(title) {
  try {
    const res = await axios.get(`http://localhost:3000/books/title/${title}`);
    console.log("📕 Books by Title:", res.data);
  } catch (err) {
    console.error("❌ Error in getBooksByTitle:", err.message);
  }
}

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle
};
