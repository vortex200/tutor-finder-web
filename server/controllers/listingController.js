const listingQuery = require("../database/listingQuery");

const listingCtrl = {
  getAllListings: async (req, res) => {
    try {
      const listings = await listingQuery.getListings();

      res.json(listings);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  createListing: async (req, res) => {
    try {
      const user_id = req.user.id;
      const { title, description, city, category } = req.body;

      if (!title || !description || !city || !category)
        return res.status(400).json({ msg: "Please fill in all fields." });

      await listingQuery.createListing(
        user_id,
        title,
        description,
        city,
        category
      );

      res.json({
        msg: "Listing created successfully!",
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = listingCtrl;
