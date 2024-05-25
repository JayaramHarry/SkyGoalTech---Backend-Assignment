require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');
const app = express();


app.use(express.json());  // Middleware


app.use('/auth', authRoutes); // Routes
app.use('/protected', protectedRoutes);


mongoose.connect('mongodb://localhost:27017/backend_assign_database', { useNewUrlParser: true, useUnifiedTopology: true }) // MongoDB Connection
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('Could not connect to MongoDB:', err.message);
    process.exit(1);
  });


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});


const port = process.env.PORT || 3000; // Server
app.listen(port, () => console.log(`Server is running on port ${port}`));
