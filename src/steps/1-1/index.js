
const _ = require('lodash');

const Answer = require('../../classes/Answer');
const answerQuestions = require('../../util/answerWrapper');

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

module.exports = {
    step: '1-1',
    questionFunction: async (questions, localInterface, step, sessionID, config) => { 
      console.log('doing: ' + step);
      
      //we duplicate the questions here do we can add more to it
      const useQuestions = [];

      questions.forEach((value) => {
        useQuestions.push(value);
      });

      const answer = new Answer(sessionID);
      let iterator = 0;
      let finish = false;

      while(finish === false) {
        console.log('iterate 1: ', iterator, useQuestions.length);
        let question = useQuestions[iterator];

        if(question.type === 'select' && question.drawData.type === 'selectWithOptions') {
          const friendlyName = Object.keys(question.parts)[0];

          if(config[friendlyName] !== 'undefined') {
            if(config[friendlyName].type === 'percentages') {

              //we validate that the total for the config split is not more than 100
              const split = config[friendlyName].split;

              let total = 0;
              split.forEach((value) => { total += value.split });

              if(total > 100) {
                return Promise.reject('Invalid percentage totals: ' + total);
              }

              //we have to create an 'output' here which is initially a copy of the options
              out = [];

              question.parts[friendlyName].options.forEach((value) => {
                out.push( _.assign({}, value) );
              });

              //we attatch range values here where they are specified
              total = 0;

              split.forEach((value) => {
                let found = false;

                out.forEach((value2, index) => {
                  if(value.lookup.toUpperCase() === value2.optionValue.toUpperCase()) {
                    out[index].startRange = total;
                    out[index].endRange = (total + value.split) - 1;
                    total = total + value.split;
                    found = true;
                  }
                });

                if(found === false) {
                  console.log('could not match ' + value.lookup + ' in step' + step);
                }
              });

              //here total contains the ammount of assigned percentage
              //we now setup a variable to work out how many more things there are to spread the remaining percentage accross
              const remainingItemsCount = out.length - split.length;
              const incrementAmmount = (100 - total) / remainingItemsCount;

              //we then make up the ones that are not specified
              out.forEach((value, index) => {
                if(typeof value.startRange === 'undefined') {
                  out[index].startRange = total;
                  out[index].endRange = (total + incrementAmmount);// - 0.00000000000001;
                  total = total + incrementAmmount;
                }
              });

              //then we pick the value
              let pickValue = null;
              const pickedNum = getRandomArbitrary(1, 100);

              out.forEach((value) => {
                if(pickedNum >= value.startRange && pickedNum <= value.endRange) {
                  pickValue = value;
                }
              });

              if(pickValue === null) {
                console.log('picking last');
                pickValue = out[out.length-1];
              }

              //answer it and get any followon stuff
              const followon = await answer.addAnswer(question.questionID, pickValue.optionID, pickValue.optionValue, friendlyName, localInterface, step);
              
              if(followon.length > 0) {
                followon.forEach((value) => {
                  useQuestions.push(value);
                });
              }

              iterator++;

              if(iterator > useQuestions.length) {
                console.log('breaking 1');
                finished = true;
              }

            }
          }
        } else {
          console.log('TYPE NOT SUPPORTED');
        }
      }

      const res = await answerQuestions(localInterface, answer.formattedAnswers, step);

      return res;
    }
  };
