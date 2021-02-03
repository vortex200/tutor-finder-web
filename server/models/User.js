const Sequelize = require("sequelize");
const db = require("../database/database");

const User = db.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    avatar: {
      type: Sequelize.STRING,
      defaultValue:
        "https://res.cloudinary.com/de3fvokkj/image/upload/v1607862347/avatar_lkbabg.jpg",
    },
  },
  {
    timestamps: true,
  }
);

User.sync().then(() => {
  console.log("table created");
});
module.exports = User;
