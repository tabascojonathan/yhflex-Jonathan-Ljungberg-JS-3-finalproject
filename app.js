const express = require('express');
const connectDB = require('./db');
const redisClient = require('./redis');

const app = express();

// Middleware för JSON-parsing
app.use(express.json());

// Connect to MongoDB
connectDB();

// Verify Redis connection
redisClient.set('key', 'value', redis.print);
redisClient.get('key', (err, reply) => {
  if (err) throw err;
  console.log(reply); // should print 'value'
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));