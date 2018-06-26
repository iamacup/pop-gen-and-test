
const _ = require('lodash');
const colors = require('colors');
const stochasm = require('stochasm');

const { getRandomInt, getRandomArbitrary } = require('../../randomFunctions');
const pickItemBasedOnPercentage = require('../../../util/pickItemBasedOnPercentage');

const percentageSplits = require('../../../scripts/splitFunctions/percentageSplits');


const salarySplit = async (question, config, answer, localInterface, step) => {
  const followon1 = await percentageSplits(question, config, 'unpaid', answer, localInterface, step);
  const unpaidAnswer = answer.latestAnswer;

  let annualSalary = 0;
  let annualBonus = 0;

  if (unpaidAnswer.optionValue === 'No') {
    while (annualSalary === 0) {
      const maxS = config.SalaryBASE.upperSalary;
      const minS = config.SalaryBASE.lowerSalary;
      const meanS = config.SalaryBASE.meanSalary;

      const salaryRandom = stochasm({
        mean: meanS, stdev: ((maxS + minS) / 2) / 7, min: minS, max: maxS,
      });

      annualSalary = salaryRandom.next();


      const maxB = config.SalaryBASE.upperBonus;
      const minB = config.SalaryBASE.lowerBonus;
      const meanB = config.SalaryBASE.meanBonus;

      const bonusRandom = stochasm({
        mean: meanB, stdev: ((maxB + minB) / 2) / 7, min: minB, max: maxB,
      });

      annualBonus = bonusRandom.next();


      annualBonus = Math.round(annualBonus / 1000) * 1000;
      annualSalary = Math.round(annualSalary / 1000) * 1000;

      //console.log('SALARIES:', annualBonus, annualSalary);
    }
  } else {
    //console.log('UNPAID');
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
