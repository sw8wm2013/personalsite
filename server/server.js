const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


// app.use('/build', express.static(path.resolve(__dirname, '../build')));
app.get('/*', (req, res, next) => res.sendFile(path.join(__dirname, '../src/index.html')));

app.listen(3000, () => {
  console.log('You\'re now listening on Port 3000');
});
