const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;

const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "1234",
  port: 3306,
  database: "voca_board",
});

app.get("/", (req, res) => {
  console.log("root");
});

app.get("/days", (req, res) => {
  console.log("/days");
  db.query("select * from days", (err, data) => {
    if (!err) {
      console.log("data", data);
      return res.json(data);
    } else {
      console.log("err", err);
      return res.json(err);
    }
  });
});

app.get("/words", (req, res) => {
  console.log("/words");
  db.query("select * from words", (err, word) => {
    if (!err) {
      console.log("data", word);
      return res.json(word);
    } else {
      console.log("err", err);
      return res.json(err);
    }
  });
});

app.listen(PORT, () => {
  console.log("서버실행");
  console.log(`Sever On :http://localhost:${PORT}`);
});
