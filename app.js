const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/books');
const userRoutes = require('./users/auth');

const app = express();
app.use(bodyParser.json());

app.use('/books', bookRoutes);
app.use('/user', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`📚 Bookstore server running on http://localhost:${PORT}`);
});
