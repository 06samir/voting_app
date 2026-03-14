const mongoose = require('mongoose'); 

mongoose.connect("mongodb://127.0.0.1:27017/voting_app")
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("Database error:", err.message));

  const db = mongoose.connection;

  db.on('connected', () => {
    console.log('DB is connected')
  })

  db.on('dis-connected', () => {
    console.log('DB is connected')
  })
  
  db.on('error', (err) => {
    console.log('DB is connected')
  })

  //export
  module.exports = db;