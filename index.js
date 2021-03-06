const express = require("express");
const mustacheExpress = require("mustache-express");

const app = express();

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

app.get("/", function(req, res){
  res.send("Hello there!");
});

app.listen(3000, function(){
  console.log("App running on localhost:3000");
});
