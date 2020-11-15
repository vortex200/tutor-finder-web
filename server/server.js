const express = require("express");
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// app.use("/api", require("./routes/routes.js"));
app.use("/api/listings", require("./routes/listings.routes.js"));

if (process.env.NODE_ENV === "production") {
  console.log("Started in production");
  app.use(express.static(path.resolve(__dirname, "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server listening on port ${PORT} 🚀`));
