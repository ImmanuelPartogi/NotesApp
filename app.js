const express = require('express');
const bodyParser = require('body-parser');
const notesRoutes = require('./routes/notes');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.APP_PORT || 3000;

app.use(bodyParser.json());
app.use('/api', notesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
