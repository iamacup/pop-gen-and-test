
const colors = require('colors');

const Answer = require('../../classes/Answer');
const answerQuestions = require('../../util/answerWrapper');
const getQuestions = require('../../util/questionWrapper');

const percentageSplits = require('../../scripts/splitFunctions/percentageSplits');
const timeDistributions = require('../../scripts/splitFunctions/timeDistributions');
const freeTextSimulation = require('../../scripts/splitFunctions/freeTextSimulation');
const educationHistorySplits = require('../../scripts/splitFunctions/educationHistorySplits');
const workHoursSplits = require('../../scripts/splitFunctions/workHoursSplits');
const salarySplit = require('../../scripts/splitFunctions/salarySplit');

const { getRandomInt } = require('../../scripts/randomFunctions');
const _ = require('lodash');

module.exports = async (localInterface, step, sessionID, config, additionalSendData) => {
  // console.log(`doing: ${step}`);

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
        if (value !== null) {
          useQuestions.push(value);
        }
      });
    }
  };

  const answer = new Answer(sessionID, additionalSendData);
  let iterator = 0;
  let finish = false;

  while (finish === false) {
    // console.log('ITERATE');
    const question = useQuestions[iterator];

    if (question === null) {
      console.log('question is null!!!'.red);
      console.log(iterator);
      console.log(questions);
      return Promise.reject(new Error('problem!'));
    }

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
    } else if (question.type === 'locationVariableDetail') {
      const friendlyName = Object.keys(question.parts)[0];

      const followon = await percentageSplits(question, config, friendlyName, answer, localInterface, step);
      updateUseQuestions(followon);
    } else if (question.type === 'educationHistory') {
      const friendlyNames = Object.keys(question.parts);

      const followon = await educationHistorySplits(question, config, friendlyNames, answer, localInterface, step);
      updateUseQuestions(followon);
    } else if (question.type === 'EmploymentStatusWithImportance') {
      const followon1 = await percentageSplits(question, config, 'graduateDestination', answer, localInterface, step);
      updateUseQuestions(followon1);

      const latestAnswer = answer.latestAnswer;
      let pickedOption = null;

      question.parts.graduateDestinationMostImportant.options.forEach((value) => {
        if (value.optionValue === latestAnswer.optionValue) {
          pickedOption = value;
        }
      });

      const followon2 = await answer.addAnswer(question.questionID, pickedOption.optionID, pickedOption.optionValue, 'graduateDestinationMostImportant', localInterface, step);
      updateUseQuestions(followon2);
    } else if (question.type === 'select' && question.drawData.type === 'companySelectWithRemoteLookup') {
      const friendlyName = Object.keys(question.parts)[0];

      const { companyNames } = config[friendlyName];
      const finalVal = companyNames[getRandomInt(0, companyNames.length - 1)];

      const followon = await answer.addAnswer(question.questionID, null, finalVal, friendlyName, localInterface, step);
      updateUseQuestions(followon);
    } else if (question.type === 'range') {
      const friendlyName = Object.keys(question.parts)[0];

      const followon = await percentageSplits(question, config, friendlyName, answer, localInterface, step);
      updateUseQuestions(followon);
    } else if (question.type === 'scale') {
      const friendlyName = Object.keys(question.parts)[0];

      const followon = await percentageSplits(question, config, friendlyName, answer, localInterface, step);
      updateUseQuestions(followon);
    } else if (question.type === 'hoursContractedActual') {
      const followon = await workHoursSplits(question, config, answer, localInterface, step);
      updateUseQuestions(followon);
    } else if (question.type === 'currencySalaryBonusTwo') {
      const followon = await salarySplit(question, config, answer, localInterface, step);
      updateUseQuestions(followon);
    } else if (question.type === 'financialNumber') {
      const friendlyName = Object.keys(question.parts)[0];

      console.log('Need to properly calculate other financial number'.red);

      const salaryVal = getRandomInt(10000, 150000);

      const followon = await answer.addAnswer(question.questionID, null, `${salaryVal}`, friendlyName, localInterface, step);
      updateUseQuestions(followon);
    } else {
      console.log(`TYPE NOT SUPPORTED: ${question.type} WITH:`.red);
      console.log(question);
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
