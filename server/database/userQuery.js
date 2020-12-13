const pool = require("./pool");

const userQuery = {
  getUserByEmail: async (email) => {
    try {
      const user = await pool.query("SELECT * from users WHERE email=$1", [
        email,
      ]);

      return user.rows[0];
    } catch (err) {
      return err;
    }
  },
  createUser: async (name, email, password) => {
    try {
      const newUser = await pool.query(
        "INSERT INTO users (name, email, password) VALUES($1, $2, $3) RETURNING *",
        [name, email, password]
      );
      return newUser.rows[0];
    } catch (err) {
      return err;
    }
  },
  setPasswordByUserId: async (id, password) => {
    try {
      await pool.query("UPDATE users SET password=$2 WHERE id=$1", [
        id,
        password,
      ]);
      return;
    } catch (err) {
      return err;
    }
  },
  getUserById: async (id) => {
    try {
      const user = await pool.query("SELECT * from users WHERE id=$1", [id]);

      return user.rows[0];
    } catch (err) {
      return err;
    }
  },
  updateUserById: async (name, avatar) => {
    try {
      await pool.query("UPDATE users SET name=$2, avatar=3$ WHERE id=$1", [
        name,
        avatar,
      ]);

      return;
    } catch (err) {
      return err;
    }
  },
};

module.exports = userQuery;
