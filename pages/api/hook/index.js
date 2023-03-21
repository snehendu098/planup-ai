import mysql from "mysql2";

const handler = (req, res) => {
  const connection = mysql.createConnection(req.body.db);
  connection.query(
    `INSERT INTO User (id, points) VALUES (?, 15);`,
    [req.body.id],
    function (err, res, fields) {
      if (err) throw err;
      console.log(res);
    }
  );
  connection.end();
  res.status(200).json({ message: "success" });
};

export default handler;
