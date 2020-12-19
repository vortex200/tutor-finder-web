const express = require("express");
const router = express.Router();
const listingCtrl = require("../controllers/listingController");
const auth = require("../middleware/auth");

router.get("/", listingCtrl.getAllListings);

router.post("/create", auth, listingCtrl.createListing);

// router.put("/update", async (req, res) => {
//   // update existing listing

//   try {
//     const { id, name, title, description, city, category } = req.body;
//     console.log(req.body);

//     await pool.query(
//       "UPDATE listings SET name = $1, title = $2, description = $3, city = $4, category = $5 WHERE id = $6",
//       [name, title, description, city, category, id]
//     );

//     return res.status(200);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// router.delete("/delete", async (req, res) => {
//   // delete existing listing

//   try {
//     const { id } = req.body;

//     await pool.query("DELETE from listings WhERE id = $1", [id]);

//     return res.status(200);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

module.exports = router;
