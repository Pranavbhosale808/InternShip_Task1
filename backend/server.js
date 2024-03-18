require('dotenv').config()
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoute');

// Middleware
app.use(express.json());

// Routes
app.use('/api',authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


