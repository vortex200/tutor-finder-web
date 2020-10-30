const express = require("express");
const router = express.Router();

const postsRouter = require("./controllers/postController");

router.get("/posts", postsRouter.getAll);

module.exports = router;
