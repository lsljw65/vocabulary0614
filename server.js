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
      // console.log("data", word);
      return res.json(word);
    } else {
      // console.log("err", err);
      return res.json(err);
    }
  });
});

app.put("/words/:id", (req, res) => {
  console.log(res.json());
  const { id, day, eng, kor, isDone } = req.body;
  console.log(`id:${id},day:${day},eng:${eng},kor:${kor},isDone:${isDone}`);
  const sql = "update words set isDone=? where id=?";
  db.query(sql, [isDone, id], (err, results, fields) => {
    console.log("err", err);
    console.log("results", results);
  });
});

app.delete("/words/:id", (req, res) => {
  console.log(res.json());
  const id = req.params.id;
  const sql = "delete from words where id=?";
  db.query(sql, [id], (err, results) => {
    console.log("err", err);
    console.log("results", results);
  });
});

/* app.post("/words", (req, res) => {
  const { day, eng, kor } = req.body;
  console.log(`day:${day}, eng:${eng}, kor:${kor}`);
  const sql = "insert int words(day,eng,kor) value(?)";
  const values = [req.body.day, req.body.eng, req.body.kor];
  db.query(sql, [values], (err, results) => {
    if (err) {
      console.log("실패", err);
      return res.json(err);
    } else {
      console.log("성공");
      return res.json(data);
    }
  });
}); */
app.post("/words", (req, res) => {
  const sql = "insert into words(`day`,`eng`,`kor`,`isDone` ) value (?)";
  const values = [req.body.day, req.body.eng, req.body.kor, req.body.isDone];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log("실패");
      return res.json(err);
    } else {
      console.log("성공");
      return res.json(data);
    }
  });
});
app.post("/days", (req, res) => {
  const sql = "insert into days(`day`) value (?)";
  const values = [req.body.day];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log("실패");
      return res.json(err);
    } else {
      console.log("성공");
      return res.json(data);
    }
  });
});
app.listen(PORT, () => {
  console.log("서버실행");
  console.log(`Sever On :http://localhost:${PORT}`);
});
