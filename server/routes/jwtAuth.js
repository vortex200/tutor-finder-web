const express = require("express");
const router = express.Router();
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validInfo");
const authorization = require("../middleware/authorization");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const pool = require("../database/db");
const bcrypt = require("bcrypt");
const { LoaderTargetPlugin } = require("webpack");

//register and login routes

router.post("/register", async (req, res) => {
    try {
        
        const { username, email, password } = req.body;

        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

        if (user.rows.length !== 0){
            return res.status(401).send("User already exists");
        }

        const saltRounds = 10;
        const salt = await bcrypt.gensalt(saltRounds);

        const bcryptPassword = await bcrypt.hash(password, salt);

        const newUser = await pool.query("INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
        [username, email, bcryptPassword]);

        const token = jwtGenerator(newUser.rows[0].id);

        return res.json({ token });

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

router.post("/login", async (req, res) => {
    try {
        
        const { email, password } = req.body;

        const user = await pool.query("SELECT * FROM users WHERE email = &1", [email]);

        if(user.rows.length === 0){
            return res.status(401).json("Password or email incorrect");
        }

        const validPassword = await bcrypt.compare(password, user.rows[0].password);

        if(!validPassword){
            return res.status(401).json("Password or email incorrect");
        }

        const token = jwtGenerator(user.rows[0].id);

        return res.json({ token });

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

router.get("/is-verified", authorization, async (req, res) => {
    try {
        
        res.jason(true);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;