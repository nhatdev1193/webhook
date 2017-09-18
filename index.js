const express = require('express');
const cmd = require('node-cmd');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/api/comminted', (req, res) => {
  cmd.get(
    'git pull',
    function(err, data, stderr){
      if (!err) {
          console.log('the node-cmd cloned dir contains these files :\n\n',data)
      } else {
          console.log('error', err)
      }
    }
  );

  res.send('OK').status(201);
  // res.send(req.body).status(201);
});

app.get('/api/test', (req, res) => {
  res.send('Test zing vn').status(200);
});

app.listen(8000, (err) => {
  if (err) {
    console.log(err);
  }

  console.log('Server is lintening at port 8000');
})