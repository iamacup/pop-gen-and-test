
const _ = require('lodash');

const { getRandomInt } = require('../../randomFunctions');
const pickItemBasedOnPercentage = require('../../../util/pickItemBasedOnPercentage');

const workHoursSplits = async (question, config, answer, localInterface, step) => {
  if (typeof config.hoursBASE === 'undefined') {
    return Promise.reject(new Error('Cant find valid config'));
  }

  const { data } = config.hoursBASE;
  const pickValue = pickItemBasedOnPercentage(data, 'split');

  let contract = pickValue.contract;

  if (pickValue.contractVarianceUpPercent !== 0) {
    contract += (contract * (pickValue.contractVarianceUpPercent / 100));
  }

  if (pickValue.contractVarianceDownPercent !== 0) {
    contract -= (contract * (pickValue.contractVarianceDownPercent / 100));
  }

  let actual = contract;

  if (pickValue.actualVarianceUpPercent !== 0) {
    actual += (contract * (pickValue.actualVarianceUpPercent / 100));
  }

  if (pickValue.actualVarianceDownPercent !== 0) {
    actual -= (contract * (pickValue.actualVarianceDownPercent / 100));
  }

  const followon1 = await answer.addAnswer(question.questionID, null, `${contract}`, 'contract', localInterface, step);
  const followon2 = await answer.addAnswer(question.questionID, null, `${actual}`, 'actual', localInterface, step);

  const outs = [];

  return outs.concat(followon1, followon2);
};

module.exports = workHoursSplits;
