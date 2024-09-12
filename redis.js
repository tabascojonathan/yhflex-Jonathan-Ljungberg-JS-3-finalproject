const redis = require('redis');

const client = redis.createClient();

client.on('connect', () => {
  console.log('Redis client connected...');
});

client.on('error', (err) => {
  console.log('Redis client error: ', err);
});

module.exports = client;