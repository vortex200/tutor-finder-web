const express = require("express");
const path = require("path");
// const pool = require("./db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api", require("./routes/routes.js"));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  console.log("Started in production");
  app.use(express.static(path.resolve(__dirname, "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

app.post("/register", async (req, res) => {
  return res.status(200);
});

app.get("/login", async (req, res) => {
  return res.status(200);
});

app.get("/auth", async (req, res) => {
  return res.status(200);
});

app.post("/listing", async (req, res) => {
  try {
    // const { info } = req.body;
    // const newListing = await pool.query(
    //   "INSERT INTO listings (info) VALUES($1)",
    //   [info]
    // );
    res.sendStatus(200);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/listings", async (req, res) => {
  try {
    // const allListings = await pool.query("SELECT * FROM listings");
    // res.json(allListings.rows);
    return res.status(200);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/listings/category", async (req, res) => {
  try {
    // const category = req.body.category;
    // const catListings = await pool.query(
    //   `SELECT * FROM listings WHERE category = ${category}`
    // );
    // res.json(catListings.rows);
    return res.status(200);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT} 🚀`));
