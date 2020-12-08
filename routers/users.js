const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Notebook = require("../models/").notebook;
const Note = require("../models/").note;
const Subject = require("../models/").subject;

const router = new Router();

//Get a new subject
router.get("/", authMiddleware, async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    res.status(200).json(allUsers);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
