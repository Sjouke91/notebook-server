const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Notebook = require("../models/").notebook;
const Note = require("../models/").note;
const Subject = require("../models/").subject;
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

const router = new Router();

//Get all users
router.get("/", authMiddleware, async (req, res, next) => {
  const { id: userId } = req.user;
  try {
    const allUsers = await User.findAll();
    if (allUsers.length === 0) {
      res.send({ message: "no users found" });
    }

    const otherUsers = allUsers.filter((user) => user.id !== userId);
    res.status(200).json(otherUsers);
  } catch (e) {
    next(e);
  }
});

//Update user profile info
router.patch("/update-user", authMiddleware, async (req, res, next) => {
  const { id } = req.user;
  const { firstName, lastName, username, email } = req.body;

  if (!id) {
    return res.status(401).json({ message: "User not found." });
  }

  if (!req.body) {
    return res.status(400);
  }

  try {
    const userToUpdate = await User.findByPk(id);

    if (!userToUpdate) {
      return res.status(404).json({ message: "No user found." });
    }

    const updatedUser = await userToUpdate.update(req.body);

    delete updatedUser.dataValues["password"]; // don't send back the password hash

    res.json(updatedUser);
  } catch (e) {
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

//Update user profile picture
router.patch("/update-picture", authMiddleware, async (req, res, next) => {
  const { id } = req.user;
  const { imageUrl } = req.body;

  if (!id) {
    return res.status(401).json({ message: "User not found." });
  }

  try {
    const userToUpdate = await User.findByPk(id);

    if (!userToUpdate) {
      return res.status(404).json({ message: "No user found." });
    }

    const updatedUser = await userToUpdate.update({
      imageUrl,
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
