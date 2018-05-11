
const _ = require('lodash');

const { getRandomInt } = require('../../randomFunctions');
const pickItemBasedOnPercentage = require('../../../util/pickItemBasedOnPercentage');

const educationHistorySplits = async (question, config, friendlyNames, answer, localInterface, step) => {
  const { educationDetailBASE } = config;

  const pickValue = pickItemBasedOnPercentage(educationDetailBASE.educationQuantity.split, 'split');

  const educationItem = pickItemBasedOnPercentage(educationDetailBASE.qualificationPicker.split, 'split');

  // pick the possible answers for this educationItem
  const pickedResult = pickItemBasedOnPercentage(educationItem.subSplits, 'split');

  let typeEN = null;
  let resultEN = null;
  let subjectEN = null;

  friendlyNames.forEach((value) => {
    if (value.endsWith('-type')) {
      typeEN = value;
    } else if (value.endsWith('-result')) {
      resultEN = value;
    } else if (value.endsWith('-subject')) {
      subjectEN = value;
    }
  });

  let outs = [];

  // we loop as many educations are we are making
  for (let a = 0; a < pickValue.count; a++) {
    let followon1 = null;
    let followon2 = null;
    let followon3 = null;

    // eslint-disable-next-line no-loop-func
    question.drawData.resultOptions.forEach(async (value) => {
      if (value.displayValue === educationItem.lookup) {
        followon1 = await answer.addAnswer(question.questionID, value.optionID, value.displayValue, `${typeEN}_${a}`, localInterface, step);

        value.options.forEach(async (value2) => {
          if (value2.displayValue === pickedResult.lookup) {
            followon2 = await answer.addAnswer(question.questionID, value2.optionID, value2.displayValue, `${resultEN}_${a}`, localInterface, step);
          }
        });
      }
    });

    const subject = educationDetailBASE.subjectList[getRandomInt(0, educationDetailBASE.subjectList.length - 1)];

    followon3 = await answer.addAnswer(question.questionID, null, subject, `${subjectEN}_${a}`, localInterface, step);

    outs = outs.concat(followon1, followon2, followon3);
  }

  return outs;
};

module.exports = educationHistorySplits;
