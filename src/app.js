
const colors = require('colors');

const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const { spawn } = require('child_process');

let port = 3000;

if (process.argv.length > 2) {
  port = process.argv[2];
}

console.log(`using port: ${port}`);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

const server = app.listen(port, () => {
  console.log('app running on port.', server.address().port);

  // this calls self once
  // spawn('curl', ['http://localhost:3000/generate-population']);

  let counter = 0;

  const runner = () => {
    console.log(`INSTANCE: ${counter}`.magenta);
    counter++;

    const thing = spawn('curl', [`http://localhost:${port}/generate-population`]);

    thing.on('close', (code) => {
      console.log('RESTARTING');
      runner();
    });
  };

  // this calls self many times
  for (let a = 0; a < 1; a++) {
    runner();
  }
});
