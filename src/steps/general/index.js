
const Answer = require('../../classes/Answer');
const answerQuestions = require('../../util/answerWrapper');
const getQuestions = require('../../util/questionWrapper');

const percentageSplits = require('../../scripts/splitFunctions/percentageSplits');
const timeDistributions = require('../../scripts/splitFunctions/timeDistributions');
const freeTextSimulation = require('../../scripts/splitFunctions/freeTextSimulation');

const { getRandomInt } = require('../../scripts/randomFunctions');
const _ = require('lodash');

module.exports = async (localInterface, step, sessionID, config, additionalSendData) => {
  console.log(`doing: ${step}`);

  let questions = await getQuestions(localInterface, step, sessionID);
  questions = questions.data;

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

  const answer = new Answer(sessionID, additionalSendData);
  let iterator = 0;
  let finish = false;

  while (finish === false) {
    console.log('ITERATE');
    const question = useQuestions[iterator];

    // TODO selectWithOptionsAllowAdd might need a seperate if clause so that we can do some percentage chance of adding an option
    if (question.type === 'select' && (question.drawData.type === 'selectWithOptions' || question.drawData.type === 'selectWithOptionsAllowAdd')) {
      const friendlyName = Object.keys(question.parts)[0];

      if (typeof config[friendlyName] !== 'undefined' && config[friendlyName].type === 'percentages') {
        const followon = await percentageSplits(question, config, friendlyName, answer, localInterface, step);
        updateUseQuestions(followon);
      } else {
        const followon = await percentageSplits(question, config, friendlyName, answer, localInterface, step);
        updateUseQuestions(followon);
      }
    } else if (question.type === 'options') {
      const friendlyName = Object.keys(question.parts)[0];

      if (typeof config[friendlyName] !== 'undefined' && config[friendlyName].type === 'percentages') {
        const followon = await percentageSplits(question, config, friendlyName, answer, localInterface, step);
        updateUseQuestions(followon);
      } else {
        const followon = await percentageSplits(question, config, friendlyName, answer, localInterface, step);
        updateUseQuestions(followon);
      }
    } else if (question.type === 'postcode') {
      const friendlyName = Object.keys(question.parts)[0];

      const followon = await percentageSplits(question, config, friendlyName, answer, localInterface, step);
      updateUseQuestions(followon);
    } else if (question.type === 'monthYear') {
      const friendlyName = Object.keys(question.parts)[0];
      let followon = null;

      if (typeof config[friendlyName] !== 'undefined' && config[friendlyName].type === 'dates') {
        followon = await timeDistributions(question, friendlyName, answer, localInterface, step, config[friendlyName].split);
      } else {
        followon = await timeDistributions(question, friendlyName, answer, localInterface, step);
      }

      updateUseQuestions(followon);
    } else if (question.type === 'freeText') {
      const friendlyName = Object.keys(question.parts)[0];

      const followon = await freeTextSimulation(question, friendlyName, answer, localInterface, step);
      updateUseQuestions(followon);
    } else if (question.type === 'multiRange') {
      const friendlyNames = Object.keys(question.parts);

      for (let a = 0; a < friendlyNames.length; a++) {
        const followon = await percentageSplits(question, config, friendlyNames[a], answer, localInterface, step);

        updateUseQuestions(followon);
      }
    } else {
      console.log(`TYPE NOT SUPPORTED: ${question.type} WITH:`.red);
      console.log(question);
      console.log(Object.keys(question.parts));
    }

    // locationVariableDetail
    // educationHistory
    // EmploymentStatusWithImportance
    // select - companySelectWithRemoteLookup
    // currencySalaryBonusTwo
    // hoursContractedActual
    // range
    // scale

    iterator++;

    if (iterator === useQuestions.length) {
      finish = true;
    }
  }

  const res = await answerQuestions(localInterface, answer.formattedAnswers, step);

  return res;
};
