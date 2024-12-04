const express = require('express');
const NotesController = require('../controllers/notesController');
const router = express.Router();

router.post('/notes', NotesController.createNote);
router.get('/notes', NotesController.getAllNotes);
router.get('/notes/:id', NotesController.getNoteById);
router.put('/notes/:id', NotesController.updateNote);
router.delete('/notes/:id', NotesController.deleteNote);

module.exports = router;
