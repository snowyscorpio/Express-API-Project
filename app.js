const express = require('express');
const users = require('./users.json'); // Import users data

const app = express();
const PORT = process.env.PORT || 3000;

// Route to get all users
// GET /api/users
app.get('/api/users', (req, res) => {
  res.status(200).json(users);
});

// Route to filter users by age range
// GET / api / users / filter ? minAge = NUMBER & maxAge=NUMBER
app.get('/api/users/filter', (req, res) => {
  const { minAge, maxAge } = req.query;
  const min = parseInt(minAge);
  const max = parseInt(maxAge);

  if (isNaN(min) || isNaN(max)) {
    return res.status(400).json({ error: 'Invalid minAge or maxAge query parameter' });
  }

  const filteredUsers = users.filter(user => user.age >= min && user.age <= max);
  res.status(200).json(filteredUsers);
});

// Route to get a user by ID
// GET /api/users/:id
app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.status(200).json(user);
});

// Route to return an HTML page with user details
// GET /user/:id
app.get('/user/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).send('<h1>User Not Found</h1>');
  }

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>User Details</title>
    </head>
    <body>
        <h1>User Details</h1>
        <p>ID: ${user.id}</p>
        <p>Name: ${user.name}</p>
        <p>Email: ${user.email}</p>
        <p>Age: ${user.age}</p>
    </body>
    </html>
  `;
  res.status(200).send(html);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
