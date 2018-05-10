
const freeTextSimulation = async (question, friendlyName, answer, localInterface, step) => {
  const finalVal = 'This is some made up free text';

  // answer it and get any followon stuff
  const followon = await answer.addAnswer(question.questionID, null, finalVal, friendlyName, localInterface, step);

  return followon;
};

module.exports = freeTextSimulation;
