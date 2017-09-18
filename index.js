const express = require('express');
const cmd = require('node-cmd');
const app = express();


app.post('/comminted', (req, res) => {
  res.send(req.body).status(201);
});

app.get('/test', (req, res) => {
  res.send('Connected to Nodejs').status(200);
});

app.listen(8000, (err) => {
  if (err) {
    console.log(err);
  }

  console.log('Server is lintening at port 8000');
})