const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3001;

// JSON body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jainil115",
  database: "syce1a",
  port: "3306",
});


// Form submission
app.post('/submit-name', (req, res) => {
  const { uid, password } = req.body


  const sql = "SELECT * FROM users WHERE uid = ? and password = ?";

  connection.query(sql, [uid, password], (err, results) => {
    if (err) {
      console.error("Error executing database query:", err);
      return res.status(500).send("Internal Server Error");
    }

    if (results.length === 0) {
      // Login credentials not found in the database
      return res.status(401).send("Internal Server Error");
    }

    // / successful, redirect to the main page
    
  });

  console.log('Submitted uid:', uid);
  console.log("Submitted password:", password);
  // / page
});
app.get('/Main', (req, res) => {
  res.send('Welcome to the main page!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
