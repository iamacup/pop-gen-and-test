
const executionItems = require('../../steps');

const config = {
  '0-1': {
    universityName: 'University of London'.toUpperCase(),
  },
  '1-1': {
      nationality: {
        type: 'percentages',
        split: [
          {
            lookup: 'United Kingdom of Great Britain and Northern Ireland (the)',
            split: 80,
          },
          {
            lookup: 'Afghanistan',
            split: 10,
          }
        ]
      }
    }
  };

let sessionID = null;

const getQuestions = async (localInterface, step) => {
	const sendData = {
			sessionID,
	};

	const fetchResponse = await localInterface('/api/universityWizzard/getStep/'+step, sendData);

	if(fetchResponse.data.generalStatus === 'success') {
		return fetchResponse.data.payload;
	} else {
		return Promise.reject(fetchResponse.data);
	}
};

module.exports = async (urlData, localInterface, responseFunc) => {

	try {

    console.log('!! STARTING !!');
		
		for(let a=0; a<executionItems.length; a++) {
			const value = executionItems[a];

			const questions = await getQuestions(localInterface, value.step);
			const response = await value.questionFunction(questions.data, localInterface, value.step, sessionID, config[value.step]);

      if(sessionID === null) {
        sessionID = response.sessionID;
      }
		}

		responseFunc('success', 'test-1', null);
	} catch (err) {
		console.log(err);
		responseFunc('error', 'test-1', null);
	}

};
