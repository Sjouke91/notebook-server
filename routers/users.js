const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Notebook = require("../models/").notebook;
const Note = require("../models/").note;
const Subject = require("../models/").subject;
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

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

//Update user profile info
router.patch("/update-user", authMiddleware, async (req, res, next) => {
  const { id } = req.user;
  const { firstName, lastName, username, imageUrl, email } = req.body;

  if (!id) {
    return res.status(401).json({ message: "User not found." });
  }

  try {
    const userToUpdate = await User.findByPk(id);

    if (!userToUpdate) {
      return res.status(404).json({ message: "No user found." });
    }

    const updatedUser = await userToUpdate.update({
      firstName,
      lastName,
      username,
      imageUrl,
      email,
    });

    delete updatedUser.dataValues["password"]; // don't send back the password hash

    res.json(updatedUser);
  } catch (e) {
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

//Update user password
router.patch("/update-password", authMiddleware, async (req, res, next) => {
  const { id } = req.user;
  const { password } = req.body;

  if (!id) {
    return res.status(401).json({ message: "User not found." });
  }

  try {
    const userToUpdate = await User.findByPk(id);

    if (!userToUpdate) {
      return res.status(404).json({ message: "No user found." });
    }

    const updatedUser = await userToUpdate.update({
      password: bcrypt.hashSync(password, SALT_ROUNDS),
    });

    delete updatedUser.dataValues["password"]; // don't send back the password hash

    res.status(200).send({ message: "Password updated." });
  } catch (e) {
    console.log("ERROR:", e);
    next(e);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
