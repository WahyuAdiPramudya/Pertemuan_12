const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"db_express"
});

db.connect((err) => {
    if (err) {
        console.log("Error connecting" + err.stact);
        return;
    } else {
        console.log("Connected to database");
        return;
    }
});

module.exports = db;