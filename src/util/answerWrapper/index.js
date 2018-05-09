
const answerQuestions = async (localInterface, answers, step) => {
  const url = '/api/universityWizzard/saveStep/'+step;
  const saveResponse = await localInterface(url, answers);

  if(saveResponse.data.generalStatus === 'success') {
    return saveResponse.data.payload;
  } else {
    return Promise.reject(saveResponse.data);
  }
};

module.exports = answerQuestions;
