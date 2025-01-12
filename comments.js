// Create web server
const express = require('express');
const app = express();

// Parse request body
app.use(express.json());

// Create comments array
const comments = [];

// Create comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comment.date = new Date();
  comments.push(comment);
  res.send(comment);
});

// Get comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Run web server
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});