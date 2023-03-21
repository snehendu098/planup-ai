import mysql from "mysql2";

const handler = async (req, res) => {
  const connection = mysql.createConnection(process.env.DATABASE_URL_NODE);
  console.log("Connected to PlanetScale!");
  connection.query(
    `INSERT INTO User (id, points) VALUES (?, 15);`,
    [req.body.id],
    function (err, res, fields) {
      console.log(err);
      console.log(res);
    }
  );
  console.log("done");
  connection.end();
};

export default handler;
