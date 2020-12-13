const tutorQuery = require("../database/tutorQuery");

const tutorCtrl = {
  registerTutor: async (req, res) => {
    try {
      const { email, phone, description } = req.body;

      if (!email || !phone || !description)
        return res.status(400).json({ msg: "Please fill in all fields." });

      const tutor = await tutorQuery.getTutorByUserId(req.user.id);
      console.log(tutor);

      if (tutor)
        return res
          .status(400)
          .json({ msg: "You are already registered as tutor." });

      await tutorQuery.createTutor(req.user.id, email, phone, description);

      res.json({
        msg: "Tutor Register Success!",
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getInfo: async (req, res) => {
    try {
      if (!req.user || !req.tutor)
        return res
          .status(400)
          .json({ msg: "Error, not getting auth information." });

      res.json({
        tutor: req.tutor,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = tutorCtrl;
