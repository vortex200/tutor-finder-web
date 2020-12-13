const tutorQuery = require("../database/tutorQuery");

const authTutor = async (req, res, next) => {
  try {
    const tutor = await tutorQuery.getTutorByUserId(req.user.id);

    if (!tutor)
      return res.status(500).json({ msg: "You are not registered as tutor." });

    req.tutor = tutor;
    next();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = authTutor;
