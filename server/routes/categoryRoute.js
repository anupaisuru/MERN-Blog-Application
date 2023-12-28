const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

//create new category
router.post("/newCat", async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    return res.status(200).json({ message: "savedCat" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

//get all caregories
router.get("/getCats", async (req, res) => {
  try {
    const cats = await Category.find();
    return res.status(200).json({ cats });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
