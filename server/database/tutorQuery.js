const pool = require("./pool");

const tutorQuery = {
  getTutorByUserId: async (user_id) => {
    try {
      const tutor = await pool.query("SELECT * from tutors WHERE user_id=$1", [
        user_id,
      ]);
      return tutor.rows[0];
    } catch (err) {
      return err;
    }
  },

  createTutor: async (user_id, email, phone, description) => {
    try {
      await pool.query(
        "INSERT INTO tutors (user_id, email, phone, description) VALUES($1, $2, $3, $4)",
        [user_id, email, phone, description]
      );
      return;
    } catch (err) {
      return err;
    }
  },
};

module.exports = tutorQuery;
