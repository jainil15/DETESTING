const express = require('express');
const multer = require('multer');
const mysql = require('mysql2');
const path = require('path')
const fs = require('fs')
const cors = require('cors')
var bodyParser = require("body-parser");
const newDirectoryPath = path.join(__dirname, 'new_directory');
console.log(newDirectoryPath)

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
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

  if (!req.body.uid) {
    return res.status(400).json({ error: 'No UID' });
  }

  // console.log(req)
  const file = req.file;
  const uid = req.body.uid;
  const originalName = file.originalname;
  const extension = path.extname(originalName);
  const fileName = file.filename + extension
  const filePath = file.path;
  const fileSize = file.size;
  const newFilePath = path.join('new_directory/', fileName );
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

app.post('/getFiles', (req, res) => {
  if (!req.body.uid) {
    return res.status(400).json({ error: 'No UID' });
  }
  const sql = 'SELECT original_name, file_name, file_path FROM files where uid=? ';
  const uid = req.body.uid;
  const values = [uid]

  connection.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error storing file details:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    
    console.log(results)
    return res.status(200).json({result: results });
  
  });
});

app.post('/downloadFile', (req, res) => {
  if (!req.body.filePath) {
    return res.status(500).json({ error: "File path not found" });
  }

  const fileName = req.body.fileName;
  const filePath = path.join(newDirectoryPath, fileName);
  console.log(filePath)
  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "File not found" });
  }

  // Read the file as a stream
  const fileStream = fs.createReadStream(filePath);

  // Set the appropriate headers for the response
  res.setHeader('Content-Disposition', `attachment; filename=${path.basename(filePath)}`);
  res.setHeader('Content-Type', 'application/octet-stream');

  // Pipe the file stream to the response
  fileStream.pipe(res);
});

app.listen(3002, () => {
  console.log('Server listening on port 3002');
});