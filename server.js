const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const { request } = require("express");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "furniture_shop",
});

// Export Data
app.get("/data", (req, res) => {
  db.query("SELECT * FROM data", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//Import Data to databases
app.post("/user", (req, res) => {
  const name = req.body.name;
  const tell = req.body.tell;
  const address = req.body.address;
  const email = req.body.email;
  const totall = req.body.totall;

  // const name = 'nathan';
  // const tell = '0863749307';
  // const address = '178/11';
  // const email = 'rommingboy2gmail.com';
  // const totall = 5400;

  db.query(
    "INSERT INTO user (name, tell, address, email, price) VALUES(?,?,?,?,?)",
    [name, tell, address, email, totall],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("value inserted");
      }
    }
  );
});

app.listen("3001", () => {
  console.log("Port 3001 is Connect !!!");
});
