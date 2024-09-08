const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static('.'));

app.post('/save-config', async (req, res) => {
  try {
    await fs.writeFile('config.json', JSON.stringify(req.body, null, 2));
    res.sendStatus(200);
  } catch (error) {
    console.error('Error saving config:', error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));