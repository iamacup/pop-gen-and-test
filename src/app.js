
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const { spawn } = require('child_process');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

const server = app.listen(3000, () => {
  console.log('app running on port.', server.address().port);

  spawn('curl', ['http://localhost:3000/generate-population']);
});
