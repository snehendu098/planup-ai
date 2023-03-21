require("dotenv").config();
const mysql = require("mysql2");
const connection = mysql.createConnection(process.env.DATABASE_URL_NODE);
console.log("Connected to PlanetScale!");
connection.query(
  `INSERT INTO User (id, points) VALUES (?, 15);`,
  [15],
  function (err, res, fields) {
    console.log(err);
    console.log(res);
  }
);
console.log("done");
connection.end();
