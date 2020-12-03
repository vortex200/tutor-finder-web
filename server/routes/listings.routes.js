const express = require("express");
const router = express.Router();
const authorization = require("../middleware/authorization");

const pool = require("../database/db");

router.get("/", authorization, async (req, res) => {
  // return all listings

  try {
    const allListings = await pool.query("SELECT * FROM listings");
    return res.json(allListings.rows);
  } catch (err) {
    console.log(err);
  }
});

router.post("/create", authorization, async (req, res) => {
  // create new listing

  try {
    const { name, title, description, city, category } = req.body;
    console.log(req.body);

    await pool.query(
      "INSERT INTO listings (name, title, description, city, category) VALUES($1, $2, $3, $4, $5)",
      [name, title, description, city, category]
    );

    return res.status(200);
  } catch (err) {
    console.error(err.message);
  }
});

router.put("/update", authorization, async (req, res) => {
  // update existing listing

  try {
    const { id, name, title, description, city, category } = req.body;
    console.log(req.body);

    await pool.query(
      "UPDATE listings SET name = $1, title = $2, description = $3, city = $4, category = $5 WHERE id = $6",
      [name, title, description, city, category, id]
    );

    return res.status(200);
  } catch (err) {
    console.error(err.message);
  }
});

router.delete("/delete", authorization, async (req, res) => {
  // delete existing listing

  try {
    const { id } = req.body;

    await pool.query("DELETE from listings WhERE id = $1", [id]);

    return res.status(200);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
