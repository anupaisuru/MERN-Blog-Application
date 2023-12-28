const express = require("express");
const router = express.Router();
const User = require("../models/User");

//register
router.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const user = await newUser.save();
    return res.status(200).json({user});
  } catch (error) {
    return res.status(500).json({error});
  }
});

//login
router.post("/login", async (req, res) => {
  try {
  } catch (error) {}
});

module.exports = router;
