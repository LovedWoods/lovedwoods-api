const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const noblox = require('noblox.js');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms*1000));
}

app.get("/", (req, res) => {
  console.log("Got Get Request!");
  const arguments = req.query

});

app.post("/", async (req, res) => {
  console.log("Got Post Request!");
  await sleep(2);
  res.json({success:true})
});

app.listen(() => console.log("Server Started!"));
