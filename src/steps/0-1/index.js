
const Answer = require('../../classes/Answer');
const answerQuestions = require('../../util/answerWrapper');

module.exports = {
    step: '0-1',
    questionFunction: async (questions, localInterface, step, sessionID, config) => {
      console.log('doing: ' + step);

      const friendlyName = 'universityName';
      const uniList = questions[0].parts[friendlyName].options;
      const answer = new Answer(sessionID);

      for(let a=0; a<uniList.length; a++) {
        if(uniList[a].optionValue.toUpperCase() === config[friendlyName]) {
          const followon = await answer.addAnswer(questions[0].questionID, uniList[a].optionID, uniList[a].optionValue, friendlyName, localInterface, step);
        }
      }

      const res = await answerQuestions(localInterface, answer.formattedAnswers, step);

      return res;
    }
  };
