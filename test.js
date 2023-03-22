require("dotenv").config();
const { default: axios } = require("axios");
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
  const res = await axios.post("https://planup-ai.vercel.app/api/hook", {
    id: "abcxyz",
  });
  console.log(res);
  test();
};

test();
