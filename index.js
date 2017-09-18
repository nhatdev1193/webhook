const express = require('express');
const cmd = require('node-cmd');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/api/comminted', (req, res) => {
  console.log(req.body);
  console.log('ok');
  res.send('OK').status(201);
  // res.send(req.body).status(201);
});

app.get('/api/test', (req, res) => {
  res.send('Connected to Nodejs').status(200);
});

app.listen(8000, (err) => {
  if (err) {
    console.log(err);
  }

  console.log('Server is lintening at port 8000');
})