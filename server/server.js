const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const mysql = require("mysql");
const cors = require('cors');

const db = mysql.createConnection( {
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database: 'uc-lavatory-database'
});

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

db.connect((err) =>{
  if(err) throw err;
  console.log('MySQL Connected');
});

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM reviews";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });


  res.json({ 
    "review": {
      "location": ["Boelter", "Bunche"],
      "time": ["11/17 12pm", "12/1 2pm"],
      "rating" : [1,3,5],
      "body": ["m1", "m2", "m3"]
    }
});
});

app.get('/api/createdb', (req, res) =>{
  let sql = 'CREATE DATABASE uc-lavatory-database'
  db.query(sql, (err, result) =>{
      if(err) throw err;
      console.log(result);
      //res.send('Database created...');
  })
});

app.post("/api/insert", (req, res) =>{
  const revLocation = req.body.revLocation;
  const revTime = req.body.revTime;
  const revRating = req.body.revRating;
  const revBody = req.body.revBody;
  

  const sqlInsert = 
  "InSERT INTO reviews (revLocation, revTime, revRating, revBody) VALUES (?,?,?,?)"
  db.query(sqlInsert, [revLocation, revTime, revRating, revBody], (err, result) =>{
      if (err) throw err;
      console.log(result);
  });


});



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


