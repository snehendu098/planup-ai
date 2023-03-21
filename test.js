require("dotenv").config();
const mysql = require("mysql2");
const connection = mysql.createConnection(process.env.DATABASE_URL_NODE);
const test = () => {
  connection.query("SELECT * FROM User", (err, res) => {
    if (err) throw err;
    console.log(res);
  });
  connection.end();
  console.log("Connected to PlanetScale!");
};

const fetchData = async () => {
  const res = await fetch("http://localhost:3000/api/hook", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: "gykb6q9t0ewe3xi1n6rh",
    }),
  });
  // const data = await res.json();
  console.log(res);
};

test();
