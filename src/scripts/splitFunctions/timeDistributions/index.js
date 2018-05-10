
const _ = require('lodash');

const { getRandomInt } = require('../../randomFunctions');

const timeDistributions = async (question, friendlyName, answer, localInterface, step, distributions) => {
  let useDistributions = distributions;

  if (typeof useDistributions === 'undefined') {
    useDistributions = [
      {
        yearsAgo: 20,
        month: 'rand',
        frequency: 1,
      },
      {
        yearsAgo: 21,
        month: 'rand',
        frequency: 2,
      },
      {
        yearsAgo: 22,
        month: 'rand',
        frequency: 1,
      },
    ];
  }

  let total = 0;
  const cleanedArr = [];

  // stick totals on the thing and generate a list with all zero values removed
  for (let a = 0; a < useDistributions.length; a++) {
    if (useDistributions[a].frequency !== 0) {
      total += useDistributions[a].frequency;

      useDistributions[a].total = total;
      cleanedArr.push(_.assign({}, useDistributions[a]));
    }
  }

  // generate a random integer between 0 and max dist weight
  const rand = getRandomInt(0, total);

  // reverse iterate the list and pick the answer
  let pickValue = null;

  for (let a = cleanedArr.length - 1; a > 0; a--) {
    if (cleanedArr[a].total <= rand) {
      pickValue = cleanedArr[a];
      break;
    }
  }

  if (pickValue === null) {
    console.log('picking first');
    pickValue = cleanedArr[0];
  }

  // make sure the month is OK
  if (pickValue.month === 'rand') {
    const month = getRandomInt(1, 12);

    if (month === 1) {
      pickValue.month = '01';
    } else if (month === 2) {
      pickValue.month = '02';
    } else if (month === 3) {
      pickValue.month = '03';
    } else if (month === 4) {
      pickValue.month = '04';
    } else if (month === 5) {
      pickValue.month = '05';
    } else if (month === 6) {
      pickValue.month = '06';
    } else if (month === 7) {
      pickValue.month = '07';
    } else if (month === 8) {
      pickValue.month = '08';
    } else if (month === 9) {
      pickValue.month = '09';
    } else if (month === 10) {
      pickValue.month = '10';
    } else if (month === 11) {
      pickValue.month = '11';
    } else if (month === 12) {
      pickValue.month = '12';
    }
  }

  // get the year value
  const now = 2018;
  pickValue.year = now - pickValue.yearsAgo;

  // compile final value
  const finalVal = `${pickValue.month}/${pickValue.year}`;

  // answer it and get any followon stuff
  const followon = await answer.addAnswer(question.questionID, null, finalVal, friendlyName, localInterface, step);

  return followon;
};

module.exports = timeDistributions;
