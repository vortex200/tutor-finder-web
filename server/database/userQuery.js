const User = require("../models/User");

const userQuery = {
  getUserByEmail: async (email) => {
    try {
      const user = await User.findOne({ where: { email } });

      if (user) {
        return user.toJSON();
      }
      return null;
    } catch (err) {
      return err;
    }
  },

  createUser: async (name, email, password) => {
    try {
      const newUser = await User.create({ name, email, password });

      return newUser.toJSON;
    } catch (err) {
      return err;
    }
  },

  setPasswordByUserId: async (id, password) => {
    try {
      await User.update(
        { password },
        {
          where: {
            id,
          },
        }
      );
      return;
    } catch (err) {
      return err;
    }
  },
  getUserById: async (id) => {
    try {
      const user = await User.findOne({ where: { id } });

      if (user) {
        return user.toJSON();
      }
      return null;
    } catch (err) {
      return err;
    }
  },
  // updateUserById: async (name, avatar) => {
  //   try {
  //     await pool.query("UPDATE users SET name=$2, avatar=3$ WHERE id=$1", [
  //       name,
  //       avatar,
  //     ]);

  //     return;
  //   } catch (err) {
  //     return err;
  //   }
  // },
};

module.exports = userQuery;
