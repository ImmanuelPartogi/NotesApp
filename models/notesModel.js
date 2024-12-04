const db = require('../database/connection');

const NotesModel = {
  createNote: (note, callback) => {
    const sql = 'INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)';
    db.query(sql, [note.title, note.datetime, note.note], callback);
  },

  getAllNotes: (callback) => {
    const sql = 'SELECT * FROM notes';
    db.query(sql, callback);
  },

  getNoteById: (id, callback) => {
    const sql = 'SELECT * FROM notes WHERE id = ?';
    db.query(sql, [id], callback);
  },

  updateNote: (id, note, callback) => {
    const sql = 'UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?';
    db.query(sql, [note.title, note.datetime, note.note, id], callback);
  },

  deleteNote: (id, callback) => {
    const sql = 'DELETE FROM notes WHERE id = ?';
    db.query(sql, [id], callback);
  },
};

module.exports = NotesModel;
