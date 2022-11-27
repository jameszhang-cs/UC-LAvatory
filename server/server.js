const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const mysql = require("mysql");
const cors = require('cors');

const db = mysql.createConnection( {
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database: 'project'
});

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

db.connect((err) =>{
  if(err) throw err;
  console.log('MySQL Connected');
});

app.get("/api/get/:id", (req, res) => {
  const sqlSelect = `SELECT * FROM reviews WHERE revLocation = "${req.params.id}"`;
  db.query(sqlSelect, (err, result) => {
    if (err) throw err;
    res.send(result);
    console.log(result);
  });

});

app.get("/api/get/", (req, res) => {
  const sqlSelect = `SELECT * FROM reviews`;
  db.query(sqlSelect, (err, result) => {
    if (err) throw err;
    res.send(result);
    console.log(result);
  });
});

app.get("/api/get/:gen/:loc", (req, res) =>{
  const sqlSelect = `SELECT * FROM reviews WHERE revLocation = "${req.params.loc}" AND revGender = "${req.params.gen}"`;
  db.query(sqlSelect, (err, result)=>{
    if (err) throw err;
    res.send(result);
    console.log(result);
  })
})

app.get("/api/get/:floor/:loc", (req, res) =>{
  const sqlSelect = `SELECT * FROM reviews WHERE revLocation = "${req.params.loc}" AND revFloor = "${req.params.floor}"`;
  db.query(sqlSelect, (err, result)=>{
    if (err) throw err;
    res.send(result);
    console.log(result);
  })
})

app.get("/api/get/:gen/:floor/:loc", (req, res) =>{
  const sqlSelect = `SELECT * FROM reviews WHERE revLocation = "${req.params.loc}" AND revGender = "${req.params.gen}" AND revFloor = "${req.params.floor}"`;
  db.query(sqlSelect, (err, result)=>{
    if (err) throw err;
    res.send(result);
    console.log(result);
  })
})

app.get("/api/average/:loc", (req, res) =>{
  const sqlSelect = `SELECT avg(revRating) FROM reviews WHERE revLocation = "${req.params.loc}"`;
  db.query(sqlSelect, (err, result)=>{
    if (err) throw err;
    res.send(result);
    console.log(result);
  })
})




app.post("/api/insert", (req, res) =>{
  const revLocation = req.body.revLocation;
  const revGender = req.body.revGender;
  const revFloor = req.body.revFloor;
  const revRating = req.body.revRating;
  const revBody = req.body.revBody;
  const revTime = req.body.revMonth + "/" + req.body.revDay + "/" + req.body.revYear;
  const sqlInsert = 
  "INSERT INTO reviews (revLocation, revTime, revGender, revFloor, revRating, revBody) VALUES (?,?,?,?,?,?)"
  db.query(sqlInsert, [revLocation, revTime, revGender, revFloor, revRating, revBody], (err, result) =>{
      if (err) throw err;
      console.log(result);
  });


});



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


