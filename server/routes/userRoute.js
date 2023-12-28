const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//update
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      return res.status(200).json({ updatedUser });
    } catch (error) {
      return res.status(500).json({ error });
    }
  } else {
    return res
      .status(401)
      .json({ message: "You can update only your account!" });
  }
});

//delete
router.post("/delete", async (req, res) => {
  try {
  } catch (error) {}
});

module.exports = router;
