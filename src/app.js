
const colors = require('colors');

//const express = require('express');
//const bodyParser = require('body-parser');

//const routes = require('./routes');

//const { spawn } = require('child_process');

if (process.argv.length !== 6) {
  console.err('Not enough arguments passed - expect `port "university name" "configuration file name" populationLimit`');
  process.exit(1);
}

const port = parseInt(process.argv[2], 10);
const uniName = process.argv[3];
const configFile = process.argv[4];
const populationLimit = parseInt(process.argv[5], 10);

console.log(`using port: ${port}`);
console.log(`using uniName: ${uniName}`);
console.log(`using configFile: ${configFile}`);
console.log(`using populationLimit: ${populationLimit}`);

const generatePopulation = require('./actions/generate-population');
const localInterface = require('./scripts/localAPI');

let counter = 0;

const runner = () => {
  if (counter === populationLimit) {
    console.log('Finished'.green);
    console.log(`${counter} population made with configuration file: ${configFile}`.green);
    process.exit();
  }

  console.log(`INSTANCE: ${counter}`.magenta);
  counter++;

  generatePopulation(null, localInterface, (status) => {
    if(status === 'success') {
      runner();
    } else {
      console.log('!!!!!!!! ERROR');
      runner();
    }
  });

};

runner();

/*
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
    if (counter === populationLimit) {
      console.log('Finished'.green);
      console.log(`${counter} population made with configuration file: ${configFile}`.green);
      process.exit();
    }

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
*/
