
const getQuestions = async (localInterface, step, sessionID) => {
  const sendData = {
    sessionID,
  };

  const fetchResponse = await localInterface(`/api/universityWizzard/getStep/${step}`, sendData);

  if (fetchResponse.data.generalStatus === 'success') {
    return fetchResponse.data.payload;
  }
  return Promise.reject(fetchResponse.data);
};

module.exports = getQuestions;
