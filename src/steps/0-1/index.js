
const Answer = require('../../classes/Answer');
const answerQuestions = require('../../util/answerWrapper');
const getQuestions = require('../../util/questionWrapper');

module.exports = {
  step: '0-1',
  questionFunction: async (localInterface, step, sessionID, config) => {
    // console.log(`doing: ${step}`);

    let questions = await getQuestions(localInterface, step, sessionID);
    questions = questions.data;

    const friendlyName = 'universityName';
    const uniList = questions[0].parts[friendlyName].options;
    const answer = new Answer(sessionID);

    for (let a = 0; a < uniList.length; a++) {
      if (uniList[a].optionValue.toUpperCase() === process.argv[3].toUpperCase()) {
        const followon = await answer.addAnswer(questions[0].questionID, uniList[a].optionID, uniList[a].optionValue, friendlyName, localInterface, step);
      }
    }

    const res = await answerQuestions(localInterface, answer.formattedAnswers, step);

    return res;
  },
};
