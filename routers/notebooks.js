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
  const { id: userId } = req.user;
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
  const { id: userId } = req.user;
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

//Delete a notebook
router.delete("/:notebookId", authMiddleware, async (req, res, next) => {
  const { id: userId } = req.user;
  const notebookId = parseInt(req.params.notebookId);

  if (!notebookId) {
    res.status(404).send({ message: "Select a notebook to delete" });
  }
  try {
    const notebookToDelete = await Notebook.findByPk(notebookId);

    if (!notebookToDelete) {
      return res.status(400).send({ message: "Notebook does not exist" });
    }
    if (notebookToDelete.userId !== userId) {
      return res.status(400).send({ message: "you're not authorized" });
    }

    console.log("THIS IS DELETE NOTEBOOK", notebookId);

    const deletedNotebook = await Notebook.destroy({
      where: { id: notebookId },
    });

    return res.status(200).json(deletedNotebook);
  } catch (e) {
    next(e);
  }
});

//Create a new note
router.post("/:notebookId/notes", authMiddleware, async (req, res) => {
  const notebookArray = req.user.dataValues.notebooks;
  const notebookId = parseInt(req.params.notebookId);
  const { title, content, imageUrl, typeOfNote } = req.body;
  if ((!title, !content, !imageUrl, !typeOfNote)) {
    res.status(404).send({ message: "Please fill in all input fields" });
  }
  try {
    const notebookIdArray = notebookArray.map(
      (notebook) => notebook.dataValues.id
    );

    console.log("THIS IS IDARRAY", notebookIdArray, notebookId);
    if (!notebookIdArray.includes(notebookId)) {
      return res.status(400).send({ message: "you're not authorized" });
    }

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
  const notebookId = parseInt(req.params.notebookId);
  const { noteId } = req.body;
  const notebookArray = req.user.dataValues.notebooks;

  if (!noteId) {
    res.status(404).send({ message: "Please select a note to delete" });
  }

  try {
    const notebookIdArray = notebookArray.map(
      (notebook) => notebook.dataValues.id
    );

    if (!notebookIdArray.includes(notebookId)) {
      return res.status(400).send({ message: "you're not authorized" });
    }

    const deletedNote = await Note.destroy({
      where: [{ id: noteId }, { notebookId }],
    });
    res.status(200).json(deletedNote);
  } catch (e) {
    next(e);
  }
});

// Edit a note from notebook
router.patch("/:notebookId/notes/:noteId", authMiddleware, async (req, res) => {
  const notebookArray = req.user.dataValues.notebooks;
  const notebookId = parseInt(req.params.notebookId);
  const noteId = parseInt(req.params.noteId);
  const { title, content, imageUrl, typeOfNote } = req.body;
  if (!title && !content && !imageUrl && !typeOfNote) {
    res.status(404).send({ message: "Please fill in all input fields" });
  }
  try {
    const notebookIdArray = notebookArray.map(
      (notebook) => notebook.dataValues.id
    );

    if (!notebookIdArray.includes(notebookId)) {
      return res.status(400).send({ message: "you're not authorized" });
    }

    const noteToUpdate = await Note.findByPk(noteId);
    const edittedNote = await noteToUpdate.update(req.body);
    return res.status(200).send(edittedNote);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
