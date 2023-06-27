const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const crypto = require("crypto");
const cors = require("cors");

function generateUniqueValue() {
    // Generate a random 16-byte buffer
    const buffer = crypto.randomBytes(8);

    // Convert the buffer to a hex string
    const value = buffer.toString("hex");

    // Take the first 16 characters of the hex string
    const uniqueValue = value.substr(0, 16);

    return uniqueValue;
}

// Generate a unique value
const uniqueValue = generateUniqueValue();
console.log(uniqueValue);

// Middleware to parse JSON request body
app.use(bodyParser.json());
app.use(cors());

// Create a MySQL connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "jainil115",
    database: "syce1a",
    port: "3306",
});

app.post("/signup", (req, res) => {
    // Retrieve user data from the request body
    const {
        username,
        password,
        address,
        gender,
        phoneNumber,
        email,
        birthdate,
        district,
        area,
        zipcode,
        state,
    } = req.body;
    const uid = generateUniqueValue();
    // Perform sign-up logic here (e.g., store user in database)
    const sql =
        "INSERT INTO users (uid, password,  username, address, gender, phoneNumber, email, birthdate, district, area, zipcode, state) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        uid,
        password,
        username,
        address,
        gender,
        phoneNumber,
        email,
        birthdate,
        district,
        area,
        zipcode,
        state,
    ];

    connection.query(sql, values, (err, results) => {
        if (err) {
            console.error("Error storing user:", err);
            return res.status(500).json({ error: "Internal Server Error", err: err });
        }

        // Return a response indicating successful sign-up
        res.json({ message: "Sign-up successful" });
    });
});
app.listen(3003, () => {
    console.log("Server listening on port 3002");
});
