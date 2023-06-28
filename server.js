const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cors());
app.use(cookieParser())
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jainil115",
  database: "syce1a",
  port: "3306",
});


app.post('/submit-name', (req, res) => {
  const { uid, password } = req.body


  const sql = "SELECT * FROM users WHERE uid = ? and password = ?";

  connection.query(sql, [uid, password], (err, results) => {
    if (err) {
      console.error("Error executing database query:", err);
      return res.status(500).send("Internal Server Error");
    }

    else if (results.length === 0) {
      return res.status(401).send("Internal Server Error");
    }
    console.log("Logged in");
    res.status(200).send("./Main");
    
    
    
  });

  console.log('Submitted uid:', uid);
  console.log("Submitted password:", password);
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
