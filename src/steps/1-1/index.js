
const _ = require('lodash');

const Answer = require('../../classes/Answer');
const answerQuestions = require('../../util/answerWrapper');

function getRandomArbitrary(min, max) {
  return Math.random() * ((max - min) + min);
}

async function handlePercentageSplits(question, config, friendlyName, answer, localInterface, step) {
  // we have to create an 'output' here which is initially a copy of the options
  const out = [];

  question.parts[friendlyName].options.forEach((value) => {
    out.push(_.assign({}, value));
  });

  // some variables
  let split = [];
  let total = 0;

  if (typeof config[friendlyName] !== 'undefined') {
  // we validate that the total for the config split is not more than 100
    ({ split } = config[friendlyName]);

    split.forEach((value) => { total += value.split; });

    if (total > 100) {
      return Promise.reject(new Error(`Invalid percentage totals: ${total}`));
    }

    // we attatch range values here where they are specified
    total = 0;

    split.forEach((value) => {
      let found = false;

      out.forEach((value2, index) => {
        if (value.lookup.toUpperCase() === value2.optionValue.toUpperCase()) {
          out[index].startRange = total;
          out[index].endRange = (total + value.split) - 1;
          total += value.split;
          found = true;
        }
      });

      if (found === false) {
        console.log(`could not match ${value.lookup} in step${step}`);
      }
    });
  }

  // here total contains the ammount of assigned percentage
  // we now setup a variable to work out how many more things there are to spread the remaining percentage accross
  const remainingItemsCount = out.length - split.length;
  const incrementAmmount = (100 - total) / remainingItemsCount;

  // we then make up the ones that are not specified
  out.forEach((value, index) => {
    if (typeof value.startRange === 'undefined') {
      out[index].startRange = total;
      out[index].endRange = (total + incrementAmmount);// - 0.00000000000001;
      total += incrementAmmount;
    }
  });

  // then we pick the value
  let pickValue = null;
  const pickedNum = getRandomArbitrary(1, 100);

  out.forEach((value) => {
    if (pickedNum >= value.startRange && pickedNum <= value.endRange) {
      pickValue = value;
    }
  });

  if (pickValue === null) {
    console.log('picking last');
    pickValue = out[out.length - 1];
  }

  // answer it and get any followon stuff
  const followon = await answer.addAnswer(question.questionID, pickValue.optionID, pickValue.optionValue, friendlyName, localInterface, step);

  return followon;
}

module.exports = {
  step: '1-1',
  questionFunction: async (questions, localInterface, step, sessionID, config) => {
    console.log(`doing: ${step}`);

    // we duplicate the questions here do we can add more to it
    const useQuestions = [];

    questions.forEach((value) => {
      useQuestions.push(value);
    });

    const updateUseQuestions = (followon) => {
      if (followon.length > 0) {
        followon.forEach((value) => {
          useQuestions.push(value);
        });
      }
    };

    const answer = new Answer(sessionID);
    let iterator = 0;
    let finish = false;

    while (finish === false) {
      console.log('ITERATE');
      const question = useQuestions[iterator];

      if (question.type === 'select' && question.drawData.type === 'selectWithOptions') {
        const friendlyName = Object.keys(question.parts)[0];

        if (typeof config[friendlyName] !== 'undefined' && config[friendlyName].type === 'percentages') {
          const followon = await handlePercentageSplits(question, config, friendlyName, answer, localInterface, step);
          updateUseQuestions(followon);
        } else {
          const followon = await handlePercentageSplits(question, config, friendlyName, answer, localInterface, step);
          updateUseQuestions(followon);
        }
      } else if (question.type === 'options') {
        const friendlyName = Object.keys(question.parts)[0];

        if (typeof config[friendlyName] !== 'undefined' && config[friendlyName].type === 'percentages') {
          const followon = await handlePercentageSplits(question, config, friendlyName, answer, localInterface, step);
          updateUseQuestions(followon);
        } else {
          const followon = await handlePercentageSplits(question, config, friendlyName, answer, localInterface, step);
          updateUseQuestions(followon);
        }
      } else {
        console.log(`TYPE NOT SUPPORTED: ${question.type}`);
      }

      iterator++;

      if (iterator === useQuestions.length) {
        finish = true;
      }
    }

    const res = await answerQuestions(localInterface, answer.formattedAnswers, step);

    return res;
  },
};
