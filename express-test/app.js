const express = require("express");

const app = express();

const token = "null";

// app.get("/", (req, res) => {
//   res.send("hello me");
// });
// app.get("/about", (req, res) => {
//   res.send("hello express & mongo & node js & react");
// });

const checkAuth = (req, res, next) => {
  console.log("she has admin permission");
  next();
};

const checkToken = (req, res, next) => {
  if (token) {
    next();
  } else {
    res.send("you don't have token");
  }
};

const getUser = (req, res) => {
  console.log("here is user info");
  res.send("here is user info");
};
app.get("/users", checkAuth, checkToken, getUser);

app.listen(5000, () => {
  console.log("server is on 5000");
});
