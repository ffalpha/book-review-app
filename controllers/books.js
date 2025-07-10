let bookStore = [
    {
      isbn: '111',
      title: 'Node Basics',
      author: 'Hend ali',
      reviews: {
        kalana: "Great for beginners!",
        alice: "Well-structured and easy to follow."
      }
    },
    {
      isbn: '222',
      title: 'Express Fast',
      author: 'John',
      reviews: {
        bob: "Fast-paced and practical.",
        maria: "Helped me build my first API."
      }
    }
  ];
  
  
  exports.getAllBooks = (req, res) => {
    res.json(bookStore);
  };
  
  exports.getBookByISBN = (req, res) => {
    const book = bookStore.find(b => b.isbn === req.params.isbn);
    res.json(book || { message: "Book not found" });
  };
  
  exports.getBooksByAuthor = (req, res) => {
    const books = bookStore.filter(b => b.author.toLowerCase() === req.params.author.toLowerCase());
    res.json(books);
  };
  
  exports.getBooksByTitle = (req, res) => {
    const books = bookStore.filter(b => b.title.toLowerCase().includes(req.params.title.toLowerCase()));
    res.json(books);
  };
  
  exports.getBookReview = (req, res) => {
    const book = bookStore.find(b => b.isbn === req.params.isbn);
    res.json(book ? book.reviews : { message: "No reviews found" });
  };
  
  exports.addOrModifyReview = (req, res) => {
    const { user, review } = req.body;
    const book = bookStore.find(b => b.isbn === req.params.isbn);
    if (!book) return res.status(404).json({ message: "Book not found" });
  
    book.reviews[user] = review;
    res.json({ message: "Review added/updated", reviews: book.reviews });
  };
  
  exports.deleteReview = (req, res) => {
    const { user } = req.body;
    const book = bookStore.find(b => b.isbn === req.params.isbn);
    if (!book || !book.reviews[user]) return res.status(404).json({ message: "Review not found" });
  
    delete book.reviews[user];
    res.json({ message: "Review deleted", reviews: book.reviews });
  };
  