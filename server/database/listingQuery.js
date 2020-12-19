const pool = require("./pool");

const listingQuery = {
  getListings: async () => {
    try {
      const listings = await pool.query("SELECT * from listings");
      return listings.rows;
    } catch (err) {
      return err;
    }
  },

  createListing: async (user_id, title, description, city, category) => {
    try {
      await pool.query(
        "INSERT INTO listings (user_id, title, description, city, category) VALUES($1, $2, $3, $4, $5)",
        [user_id, title, description, city, category]
      );
      return;
    } catch (err) {
      return err;
    }
  },
};

module.exports = listingQuery;
