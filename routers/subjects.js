const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Notebook = require("../models/").notebook;
const Note = require("../models/").note;
const Subject = require("../models/").subject;

const router = new Router();

//Create a new subject
router.post("/", authMiddleware, async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    res.status(404).send({ message: "Please fill in all input fields" });
  }
  try {
    const newSubject = await Subject.create({
      name,
    });
    res.status(200).json(newSubject);
  } catch (e) {
    next(e);
  }
});

//Get a new subject
router.get("/", async (req, res, next) => {
  try {
    const allSubjects = await Subject.findAll();
    res.status(200).json(allSubjects);
  } catch (e) {
    next(e);
  }
});

//Delete a subject
router.delete("/:subjectId", authMiddleware, async (req, res, next) => {
  const { subjectId } = req.params;
  if (!name) {
    res.status(404).send({ message: "Please fill in all input fields" });
  }
  try {
    const newSubject = await Subject.destroy({
      where: { subjectId },
    });
    res.status(200).json(newSubject);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
