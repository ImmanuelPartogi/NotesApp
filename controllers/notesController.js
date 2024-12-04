const NotesModel = require('../models/notesModel');

const NotesController = {
  createNote: (req, res) => {
    const note = req.body;
    NotesModel.createNote(note, (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Note created successfully', data: results });
    });
  },

  getAllNotes: (req, res) => {
    NotesModel.getAllNotes((err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json(results);
    });
  },

  getNoteById: (req, res) => {
    const { id } = req.params;
    NotesModel.getNoteById(id, (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0) return res.status(404).json({ message: 'Note not found' });
      res.status(200).json(results[0]);
    });
  },

  updateNote: (req, res) => {
    const { id } = req.params;
    const note = req.body;
    NotesModel.updateNote(id, note, (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.affectedRows === 0) return res.status(404).json({ message: 'Note not found' });
      res.status(200).json({ message: 'Note updated successfully' });
    });
  },

  deleteNote: (req, res) => {
    const { id } = req.params;
    NotesModel.deleteNote(id, (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.affectedRows === 0) return res.status(404).json({ message: 'Note not found' });
      res.status(200).json({ message: 'Note deleted successfully' });
    });
  },
};

module.exports = NotesController;
