
const generalQuestionFunction = require('../general');
const { getRandomInt } = require('../../scripts/randomFunctions');

const modifiedFunction = async (localInterface, step, sessionID, config) => {
  const useStep = '2-1';

  // work up the percentages
  const { split } = config.BASE.qualificationLoops;

  let total = 0;

  for (let a = 0; a < split.length; a++) {
    split[a].startRange = total;
    split[a].endRange = (total + split[a].percent) - 1;
    total += split[a].percent;
  }

  const pickedNum = getRandomInt(0, 99);
  let pickValue = null;

  split.forEach((value) => {
    if (pickedNum >= value.startRange && pickedNum <= value.endRange) {
      pickValue = value;
    }
  });

  if (pickValue === null) {
    console.log('picking arbitrary');
    pickValue = split[split.length - 1];
  }

  const grabConfig = (count) => {
    for (let a = 0; a < config.qualifications.length; a++) {
      if (config.qualifications[a].countID === count) {
        return config.qualifications[a].data;
      }
    }

    return {};
  };

  // now we loop
  for (let a = 0; a < pickValue.count; a++) {
    const additionalSendData = {
      arrayValue: `0_${a}`,
      qualificationLoop: a,
      uniLoop: 0,
    };

    const thisConfig = grabConfig(a + 1);

    const res = await generalQuestionFunction(localInterface, useStep, sessionID, thisConfig, additionalSendData);
  }
};

module.exports = {
  step: 'uni-qualifications',
  questionFunction: modifiedFunction,
};
