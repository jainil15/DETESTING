const express = require('express');
const multer = require('multer');
const mysql = require('mysql2');
const path = require('path')
const fs = require('fs')
const cors = require('cors')

const app = express();
app.use(cors());
const upload = multer({ dest: 'new_directory/' });

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'jainil115',
  database: 'syce1a',
  port: '3306',
});

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  // console.log(req)
  const file = req.file;
  const uid = req.body.uid;
  const originalName = file.originalname;
  const extension = path.extname(originalName);
  const fileName = file.filename
  const filePath = file.path ;
  const fileSize = file.size;
  const newFilePath = path.join('new_directory/', fileName + extension);
  fs.renameSync(filePath, newFilePath);
  
  const sql = 'INSERT INTO files (uid, original_name, file_name, file_path, file_size) VALUES (?,?, ?, ?, ?)';
  const values = [uid, originalName, fileName, filePath, fileSize];

  connection.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error storing file details:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    return res.status(200).json({ message: 'File uploaded successfully' });
  });
});

app.listen(3002, () => {
  console.log('Server listening on port 3002');
});