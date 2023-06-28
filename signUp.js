const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const crypto = require("crypto");
const cors = require("cors");

function generateUniqueValue() {
    const buffer = crypto.randomBytes(8);

    const value = buffer.toString("hex");

    const uniqueValue = value.substr(0, 16);

    return uniqueValue;
}

const uniqueValue = generateUniqueValue();
console.log(uniqueValue);

app.use(bodyParser.json());
app.use(cors());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "jainil115",
    database: "syce1a",
    port: "3306",
});

app.post("/signup", (req, res) => {
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

        res.json({ message: "Sign-up successful" });
    });
});
app.listen(3003, () => {
    console.log("Server listening on port 3002");
});
