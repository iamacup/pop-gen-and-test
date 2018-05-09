
const Answer = require('../../classes/Answer');
const answerQuestions = require('../../util/answerWrapper');
const handlePercentageSplits = require('../../scripts/splitFunctions/percentageSplits');

module.exports = async (questions, localInterface, step, sessionID, config) => {
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
    } else if (question.type === 'postcode') {
      const friendlyName = Object.keys(question.parts)[0];

      const followon = await handlePercentageSplits(question, config, friendlyName, answer, localInterface, step);
      updateUseQuestions(followon);
    } else {
      console.log(`TYPE NOT SUPPORTED: ${question.type} WITH friendlyName(s):`);
      console.log(Object.keys(question.parts));
    }

    iterator++;

    if (iterator === useQuestions.length) {
      finish = true;
    }
  }

  const res = await answerQuestions(localInterface, answer.formattedAnswers, step);

  return res;
};
