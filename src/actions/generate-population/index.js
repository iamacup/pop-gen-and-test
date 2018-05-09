
const executionItems = require('../../steps');

// percentages
// subtype - lookup - will lookup the options based on the percentages and spread out over the remaining options that are not specified
// subtype - pick - will split based on the optiosn provided (free text)

const config = {
  '0-1': {
    universityName: 'University of London'.toUpperCase(),
  },
  '1-1': {
    nationality1: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'United Kingdom of Great Britain and Northern Ireland (the)',
          split: 80,
        },
      ],
    },
  },
  '1-2': {
    liveInUK: {
      type: 'percentages',
      subType: 'lookup',
      split: [
        {
          lookup: 'Yes',
          split: 80,
        },
      ],
    },
    postcode: {
      type: 'percentages',
      subType: 'pick',
      split: [
        {
          lookup: 'NG5 4JX',
          split: 50,
        },
        {
          lookup: 'SE17 3SD',
          split: 50,
        },
      ],
    },
  },
};

let sessionID = null;

const getQuestions = async (localInterface, step) => {
  const sendData = {
    sessionID,
  };

  const fetchResponse = await localInterface(`/api/universityWizzard/getStep/${step}`, sendData);

  if (fetchResponse.data.generalStatus === 'success') {
    return fetchResponse.data.payload;
  }
  return Promise.reject(fetchResponse.data);
};

module.exports = async (urlData, localInterface, responseFunc) => {
  try {
    console.log('!! STARTING !!');

    for (let a = 0; a < executionItems.length; a++) {
      const value = executionItems[a];

      const questions = await getQuestions(localInterface, value.step);

      let useConfig = config[value.step];

      if (typeof useConfig === 'undefined') {
        useConfig = {};
      }

      const response = await value.questionFunction(questions.data, localInterface, value.step, sessionID, useConfig);

      if (sessionID === null) {
        ({ sessionID } = response);
      }
    }

    responseFunc('success', 'test-1', null);
  } catch (err) {
    console.log(err);
    responseFunc('error', 'test-1', null);
  }
};
