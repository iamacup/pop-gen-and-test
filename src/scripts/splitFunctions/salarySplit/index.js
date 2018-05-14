
const _ = require('lodash');
const colors = require('colors');

const { getRandomInt } = require('../../randomFunctions');
const pickItemBasedOnPercentage = require('../../../util/pickItemBasedOnPercentage');

const percentageSplits = require('../../../scripts/splitFunctions/percentageSplits');

const salarySplit = async (question, config, answer, localInterface, step) => {
  console.log('function entry');

  const followon1 = await percentageSplits(question, config, 'unpaid', answer, localInterface, step);
  const unpaidAnswer = answer.latestAnswer;

  let annualSalary = 0;
  let annualBonus = 0;

  if (unpaidAnswer.optionValue === 'No') {
    console.log('NEED TO IMPLEMENT PROPPER SALARY AND BONUS RANDOM'.red);

    annualSalary = 80000;
    annualBonus = 5000;
  }

  // pull back the last answer, if it was yes to unpaid - don't put in a salary!

  const followon2 = await percentageSplits(question, config, 'currency', answer, localInterface, step);

  // need to make the periods realistic - take annual salary randomness and then work out based on what was worked out for this
  const followon3 = await percentageSplits(question, config, 'salaryPeriod', answer, localInterface, step);
  const salaryPeriodAnswer = answer.latestAnswer;

  const followon4 = await percentageSplits(question, config, 'bonusPeriod', answer, localInterface, step);
  const bonusPeriodAnswer = answer.latestAnswer;

  let finalSalaryValue = 0;
  let finalBonusValue = 0;

  if (unpaidAnswer.optionValue === 'No') {
    if (salaryPeriodAnswer.optionValue === 'Monthly') {
      finalSalaryValue = annualSalary / 12;
    } else if (salaryPeriodAnswer.optionValue === 'Weekly') {
      finalSalaryValue = annualSalary / 52;
    } else if (salaryPeriodAnswer.optionValue === 'Daily') {
      finalSalaryValue = annualSalary / 365;
    }

    if (bonusPeriodAnswer.optionValue === 'Annually') {
      finalBonusValue = annualBonus;
    } else if (bonusPeriodAnswer.optionValue === 'Monthly') {
      finalBonusValue = annualBonus / 12;
    } else if (bonusPeriodAnswer.optionValue === 'Weekly') {
      finalBonusValue = annualBonus / 52;
    } else if (bonusPeriodAnswer.optionValue === 'Daily') {
      finalBonusValue = annualBonus / 365;
    }
  }

  const followon5 = await answer.addAnswer(question.questionID, null, `${finalSalaryValue}`, 'salary', localInterface, step);
  const followon6 = await answer.addAnswer(question.questionID, null, `${finalBonusValue}`, 'bonus', localInterface, step);

  const outs = [];

  return outs.concat(followon1, followon2, followon3, followon4);
};

module.exports = salarySplit;
