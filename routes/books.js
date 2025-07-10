const express = require('express');
const router = express.Router();
const books = require('../controllers/books');

// Tasks 1–5: General Users
router.get('/', books.getAllBooks);
router.get('/isbn/:isbn', books.getBookByISBN);
router.get('/author/:author', books.getBooksByAuthor);
router.get('/title/:title', books.getBooksByTitle);
router.get('/review/:isbn', books.getBookReview);

// Tasks 8–9: Registered Users
router.post('/review/:isbn', books.addOrModifyReview);
router.delete('/review/:isbn', books.deleteReview);

module.exports = router;
