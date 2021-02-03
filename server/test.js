const db = require("./database/database");
const User = require("./models/User");
const userQuery = require("./database/userQuery");

// User.create({
//   name: "Vardas Pavarde",
//   email: "testas@email.com",
//   password: "slaptazodis",
// })
//   .then((user) => console.dir("success" + user.toJSON().name))
//   .catch((err) => console.log("error", { error: err.message }));

// userQuery
//   .getUserByEmail("testas@email.com")
//   .then((user) => console.log(user))
//   .catch((err) => console.log("error", { error: err.message }));

// { where: { email: "testas@email.com" } }

// User.findOne({ raw: true, where: { email: "testas@email.com" } })
//   .then((user) => {
//     console.log("works");
//     console.dir(user);
//   })
//   .catch((err) => console.log("error", { error: err.message }));

userQuery
  .getUserByEmail("testas1@email.com")
  .then((user) => {
    console.log("works");
    console.dir(user);
  })
  .catch((err) => console.log("error", { error: err.message }));
