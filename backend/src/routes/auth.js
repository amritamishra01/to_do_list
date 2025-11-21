// const router = require("express").Router();
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// // REGISTER
// router.post('/register', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // Fast manual validation
//     if (!name || !email || !password) {
//       return res.status(400).json({ error: "All fields required" });
//     }

//     const existing = await User.findOne({ email });
//     if (existing) return res.status(400).json({ error: "Email already exists" });

//     const hash = await bcrypt.hash(password, 10);
//     const user = await User.create({ name, email, password: hash });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

//     res.json({ token });
//   } catch (err) {
//     res.status(500).json({ error: "Server Error" });
//   }
// });

// // LOGIN
// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password)
//       return res.status(400).json({ error: "Email and password required" });

//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ error: "Invalid credentials" });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.status(400).json({ error: "Invalid credentials" });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

//     res.json({ token });
//   } catch (err) {
//     res.status(500).json({ error: "Server Error" });
//   }
// });

// // PROFILE
// const auth = require('../middleware/auth');
// router.get("/me", auth, (req, res) => res.json(req.user));

// module.exports = router;
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// REGISTER
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    console.log("REGISTER ATTEMPT:", req.body);

    if (!name || !email || !password) {
      console.log("REGISTER ERROR: Missing fields");
      return res.status(400).json({ error: "All fields required" });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      console.log("REGISTER ERROR: Email exists:", email);
      return res.status(400).json({ error: "Email already exists" });
    }

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hash });

    console.log("REGISTER SUCCESS:", user.email);

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    // ⭐ RETURN token + user
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (err) {
    console.log("REGISTER SERVER ERROR:", err);
    res.status(500).json({ error: "Server Error" });
  }
});


// LOGIN
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("\n====== LOGIN ATTEMPT ======");
    console.log("Email received:", `"${email}"`);
    console.log("Password received:", `"${password}"`);

    if (!email || !password) {
      console.log("LOGIN ERROR: Missing fields");
      return res.status(400).json({ error: "Email and password required" });
    }

    const user = await User.findOne({ email });

    console.log("User found in DB:", user ? user.email : null);

    if (!user) {
      console.log("LOGIN ERROR: No user with email:", email);
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, user.password);

    console.log("Password match result:", match);

    if (!match) {
      console.log("LOGIN ERROR: Wrong password");
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    console.log("LOGIN SUCCESS:", user.email);

    // ⭐ RETURN token + user (IMPORTANT)
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (err) {
    console.log("LOGIN SERVER ERROR:", err);
    res.status(500).json({ error: "Server Error" });
  }
});


// PROFILE
const auth = require('../middleware/auth');
router.get("/me", auth, (req, res) => res.json(req.user));

module.exports = router;