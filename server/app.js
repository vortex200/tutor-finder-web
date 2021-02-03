const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/user", require("./routes/user.routes.js"));

if (process.env.NODE_ENV === "production") {
  console.log("Started in production");
  app.use(express.static(path.resolve(__dirname, "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

module.exports = app;
