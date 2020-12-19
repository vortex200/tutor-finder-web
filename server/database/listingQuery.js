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

  getFullListing: async (listing_id) => {
    try {
      const listing = await pool.query("SELECT * from listings WHERE id=$1", [
        listing_id,
      ]);
      const user = await pool.query("SELECT * from users WHERE id=$1", [
        listing.rows[0].user_id,
      ]);
      return {
        listing: listing.rows[0],
        user: {
          name: user.rows[0].name,
          email: user.rows[0].email,
          avatar: user.rows[0].avatar,
        },
      };
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

  getListingById: async (listing_id) => {
    try {
      const listing = await pool.query("SELECT * from listings WHERE id=$1", [
        listing_id,
      ]);
      return listing.rows[0];
    } catch (err) {
      return err;
    }
  },

  deleteListing: async (id) => {
    try {
      await pool.query("DELETE FROM listings WHERE id=$1", [id]);
      return;
    } catch (err) {
      return err;
    }
  },
};

module.exports = listingQuery;
