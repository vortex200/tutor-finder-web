const router = require("express").Router();
const tutorCtrl = require("../controllers/tutorController");
const auth = require("../middleware/auth");
const authTutor = require("../middleware/authTutor");

// Create new tutor object for user
router.post("/register", auth, tutorCtrl.registerTutor);

// Get user tutor object
router.get("/info", auth, authTutor, tutorCtrl.getInfo);

// Update information

// router.post("/register", userCtrl.register);

module.exports = router;
