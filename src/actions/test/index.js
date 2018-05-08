
const pickUniversity = 'University of London'.toUpperCase();

let sessionID = null;

const answerQuestions = async (localInterface, answers, step) => {
	const url = '/api/universityWizzard/saveStep/'+step;
	const saveResponse = await localInterface(url, answers);

	if(saveResponse.data.generalStatus === 'success') {

		if(step === '0-1') {
			sessionID = saveResponse.data.payload.sessionID;

			console.log('settings sessionID');
			console.log(sessionID);
		}

		return saveResponse.data.payload;
	} else {
		return Promise.reject(saveResponse.data);
	}
};

const getQuestions = async (localInterface, step) => {
	const sendData = {
			sessionID,
	};

	const fetchResponse = await localInterface('/api/universityWizzard/getStep/'+step, sendData);

	if(fetchResponse.data.generalStatus === 'success') {
		return fetchResponse.data.payload;
	} else {
		return Promise.reject(detchResponse.data);
	}
};

module.exports = async (urlData, localInterface, responseFunc) => {

	try {
		
		const questions = await getQuestions(localInterface, '0-1');
		const uniList = questions.data[0].parts.universityName.options;
		let saveData = null;

		for(let a=0; a<uniList.length; a++) {
			if(uniList[a].optionValue.toUpperCase() === pickUniversity) {
				saveData = {
					sessionID,
					arrayValue: 0,
					answers: {
						'0': {
							questionID: questions.data[0].questionID,
							answer: {
								universityName: {
									optionID: uniList[a].optionID,
									optionValue: uniList[a].optionValue,
								}
							}
						}
					}
				};
			}
		}

		const tee = await answerQuestions(localInterface, saveData, '0-1');
		console.log(tee);

		responseFunc('success', 'test-1', null);
	} catch (err) {
		console.log(err);
		responseFunc('error', 'test-1', null);
	}

}
