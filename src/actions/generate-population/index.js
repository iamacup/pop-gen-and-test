
const colors = require('colors');

const executionItems = require('../../steps');
const config = require('../../config');

module.exports = async (urlData, localInterface, responseFunc) => {
  let sessionID = null;

  try {
    console.log('!! STARTING !!');
    sessionID = null;

    for (let a = 0; a < executionItems.length; a++) {
      const value = executionItems[a];

      let useConfig = config[value.step];

      if (typeof useConfig === 'undefined') {
        useConfig = {};
      }

      const response = await value.questionFunction(localInterface, value.step, sessionID, useConfig);

      if (sessionID === null) {
        ({ sessionID } = response);
        console.log(`setting session ID${sessionID}`.cyan);
      }
    }

    console.log(`SAVE THE SESSION: ${sessionID}`);
    // now we save the stuff!

    const saveOut = await localInterface('/api/universityWizzard/saveSession', {
      sessionID,
    });

    if (saveOut.data.generalStatus !== 'success') {
      console.log(saveOut.data);
    } else {
      console.log('SUCCESS! Finish'.green);
    }

    responseFunc('success', 'test-1', null);
  } catch (err) {
    console.log(err);
    responseFunc('error', 'test-1', null);
  }
};
