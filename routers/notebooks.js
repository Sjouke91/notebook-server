const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Notebook = require("../models/").notebook;
const Note = require("../models/").note;

const router = new Router();

//get all notebooks of all users
router.get("/", async (req, res) => {
  const userId = req.user.id;
  try {
    const userNotebooks = await Notebook.findAll();
    res.status(200).send(userNotebooks);
  } catch (e) {
    next(e);
  }
});

//get one specific notebook of user
router.get("/:notebookId", authMiddleware, async (req, res) => {
  const { notebookId } = req.params;
  try {
    const userNotebooks = await Notebook.findOne({
      where: { id: notebookId },
      include: {
        model: Note,
        attributes: [
          "title",
          "content",
          "typeOfNote",
          "createdAt",
          "updatedAt",
        ],
      },
    });
    res.status(200).send(userNotebooks);
  } catch (e) {
    next(e);
  }
});

//Create a new notebook
router.post("/", authMiddleware, async (req, res) => {
  const { userId } = req.user;
  const { name, subjectId } = req.body;
  if ((!name, !subjectId)) {
    res.status(404).send({ message: "Please fill in all input fields" });
  }
  try {
    const newNotebook = await Notebook.create({
      name,
      userId,
      subjectId,
    });
    res.status(200).json(newNotebook);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
