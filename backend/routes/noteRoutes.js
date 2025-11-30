
const express = require("express");

const router = express.Router();

const {createNote,  gNotes, gNoteById,} = require("../controllers/noteController");

// POST new note
router.post("/", createNote);

// GET all notes
router.get("/", gNotes);


// GET single note by ID
router.get("/:id", gNoteById);

module.exports = router;