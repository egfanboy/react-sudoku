const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/build')));

app.get('/*', (req, res) => res.sendFile('build/index.html'));
console.log(process.env.PORT);
app.listen(process.env.PORT || 9005);
