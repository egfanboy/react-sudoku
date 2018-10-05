const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/build')));

app.get('/*', (req, res) => res.sendFile('build/index.html'));
const port = process.env.PORT || 9005;
app.listen(port, () => {
  console.log(`Server running on port ${port}`); // eslint-disable-line no-console
});
