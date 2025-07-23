const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("hello me");
});
app.get("/about", (req, res) => {
  res.send("hello express & mongo & node js & react");
});
app.listen(5000, () => {
  console.log("server is on 5000");
});
