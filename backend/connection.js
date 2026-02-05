require("dotenv").config();
const mongoose = require("mongoose");

// Prefer using an environment variable. Fallback to the URL below (trimmed).
const DEFAULT_URL =
  "mongodb+srv://vanshikapal44:Vanshika12@cluster0.jbemkc8.mongodb.net/internship?appName=Cluster0";
const url = (process.env.MONGO_URI || DEFAULT_URL).trim();

// Connect with sensible defaults
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.error("database connection error:", err.message || err);
  });

module.exports = mongoose;
