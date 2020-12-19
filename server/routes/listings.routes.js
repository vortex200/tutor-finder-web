const express = require("express");
const router = express.Router();
const listingCtrl = require("../controllers/listingController");
const auth = require("../middleware/auth");

router.get("/", listingCtrl.getAllListings);
router.get("/:id", listingCtrl.getListingById);
router.post("/create", auth, listingCtrl.createListing);
router.delete("/delete/:id", auth, listingCtrl.deleteListing);

module.exports = router;
