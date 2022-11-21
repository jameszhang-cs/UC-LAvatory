const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/api", (req, res) => {
  res.json({ 
    "review": {
      "location": ["Boelter", "Bunche"],
      "time": ["11/17 12pm", "12/1 2pm"],
      "body": ["m1", "m2", "m3"]
    }
});
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


