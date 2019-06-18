const express = require("express");
const app = express();
const port = process.env.PORT || 1337;
app.get("/", (req, res) => res.send(process.env));

app.listen(port, (req, res) => {
  console.log(`Example app listening on port ${port} ${process.env.NODE_ENV}!`);

});