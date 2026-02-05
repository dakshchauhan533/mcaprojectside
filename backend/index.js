//importing express
const express = require("express");

const cors = require("cors");

// initialize express
const app = express();

const port = 5000;

// load environment variables and establish DB connection
require("dotenv").config();
require("./connection");

//middleware
app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);

app.use(express.json());

// endpoint or route
app.get("/", (req, res) => {
  res.send("respond from express");
});

app.get("/add", (req, res) => {
  res.send("respond from add");
});

//getall
app.get("/getall", (req, res) => {
  res.send("respond from getall");
});

//update
app.get("/update", (req, res) => {
  res.send("respond from update");
});

//starting the express server
app.listen(port, () => {
  console.log("server started");
});
