
const Note =  require("../models/notesModel");

const createNote = async(req, res) => {
    const {title, content} = req.body;

    if(!title || !content) {
         res.status(400).json({message: "Title and content are required"});
         return;
    }


    const note = await Note.create({
        title : title,
        content : content,
    });


    res.status(201).json(note)
}

// @desc    Get single note by ID
// @route   GET /api/notes/:id
const gNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


const gNotes = async (req, res) => {
  try {
    const notes = await Note.find(); // gets all notes
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};




module.exports = {
    createNote,
    gNotes,
  gNoteById,
}