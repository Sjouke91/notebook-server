const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Notebook = require("../models/").notebook;
const Note = require("../models/").note;
const Subject = require("../models/").subject;

const router = new Router();

//Create a new subject
router.post("/subjects", authMiddleware, async (req, res, next) => {
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

//Delete a subject
router.delete(
  "/subjects/:subjectId",
  authMiddleware,
  async (req, res, next) => {
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
  }
);

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

//Create a new note
router.post("/:notebookId/notes", async (req, res) => {
  const { notebookId } = req.params;
  const { title, content, imageUrl, typeOfNote } = req.body;
  if ((!title, !content, !imageUrl, !typeOfNote)) {
    res.status(404).send({ message: "Please fill in all input fields" });
  }
  try {
    const newNote = await Note.create({
      notebookId,
      title,
      content,
      imageUrl,
      typeOfNote,
    });
    res.status(200).json(newNote);
  } catch (e) {
    next(e);
  }
});

//Delete a note from notebook
router.delete("/:notebookId/notes", authMiddleware, async (req, res) => {
  const { notebookId } = req.params;
  const { noteId } = req.body;
  if (!noteId) {
    res.status(404).send({ message: "Please select a note to delete" });
  }
  try {
    const newNote = await Note.destroy({
      where: [{ id: noteId }, { notebookId }],
    });
    res.status(200).json(newNote);
  } catch (e) {
    next(e);
  }
});

//Edit a note from notebook
router.patch("/:notebookId/notes", authMiddleware, async (req, res) => {
  const { notebookId } = req.params;
  const { title, content, imageUrl, typeOfNote } = req.body;
  if (!title && !content && !imageUrl && !typeOfNote) {
    res.status(404).send({ message: "Please select a note to delete" });
  }
  try {
    const newNote = await Note.destroy({
      where: [{ id: noteId }, { notebookId }],
    });
    res.status(200).json(newNote);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
