
const executionItems = require('../../steps');
const config = require('../../config');

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
