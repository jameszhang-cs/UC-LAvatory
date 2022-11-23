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

});

app.post("/api/insert", (req, res) =>{
  const revLocation = req.body.revLocation;
  //const revTime = req.body.revTime;
  const revRating = req.body.revRating;
  const revBody = req.body.revBody;
  const sqlInsert = 
  "INSERT INTO reviews (revLocation, revRating, revBody) VALUES (?,?,?)"
  db.query(sqlInsert, [revLocation, revRating, revBody], (err, result) =>{
      if (err) throw err;
      console.log(result);
  });


});



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


