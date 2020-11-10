const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api", require("./routes/routes.js"));

if (process.env.NODE_ENV === "production") {
  console.log("Started in production");
  app.use(express.static(path.resolve(__dirname, "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server listening on port ${PORT} 🚀`));
