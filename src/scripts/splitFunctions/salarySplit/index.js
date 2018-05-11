
const _ = require('lodash');

const { getRandomInt } = require('../../randomFunctions');
const pickItemBasedOnPercentage = require('../../../util/pickItemBasedOnPercentage');

const percentageSplits = require('../../../scripts/splitFunctions/percentageSplits');

const salarySplit = async (question, config, answer, localInterface, step) => {
  console.log('function entry');


  // console.log(question.parts.unpaid);
  // console.log(question.parts.salaryPeriod);
  // console.log(question.parts.bonusPeriod);


  const followon1 = await percentageSplits(question, config, 'unpaid', answer, localInterface, step);
  const unpaidAnswer = answer.latestAnswer;

  // pull back the last answer, if it was yes to unpaid - don't put in a salary!

  const followon2 = await percentageSplits(question, config, 'currency', answer, localInterface, step);

  // need to make the periods realistic - take annual salary randomness and then work out based on what was worked out for this
  const followon3 = await percentageSplits(question, config, 'salaryPeriod', answer, localInterface, step);
  const salaryPeriodAnswer = answer.latestAnswer;

  const followon4 = await percentageSplits(question, config, 'bonusPeriod', answer, localInterface, step);
  const bonusPeriodAnswer = answer.latestAnswer;

  const outs = [];

  return outs.concat(followon1, followon2, followon3, followon4);
};

module.exports = salarySplit;
