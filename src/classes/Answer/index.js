
const colors = require('colors');

class Answer {
  constructor(sessionID) {
    this.sessionID = sessionID;
    this.answers = [];
  }

  async addAnswer(questionID, optionID, optionValue, friendlyName, localInterface, step) {
    this.answers.push({
      questionID,
      optionID,
      optionValue,
      friendlyName,
    });

    console.log('adding answer: '.green, friendlyName, ' - ', optionValue, ' - ', optionID);

    // we get followon questions here
    const sendData = {
      answeredQuestionID: questionID,
      questionMetaData: `uni-step-${step}`,
      questionState: this.formattedAnswers.answers,
    };

    const fetchResponse = await localInterface('/api/questions/additionalData/followonQuestions', sendData);

    if (fetchResponse.data.generalStatus === 'success') {
      return fetchResponse.data.payload;
    }

    return Promise.reject(new Error('Bad status'));
  }

  get formattedAnswers() {
    const results = {
      sessionID: this.sessionID,
      arrayValue: 0,
      answers: {},
    };

    for (let a = 0; a < this.answers.length; a++) {
      const answerObj = {};

      answerObj[this.answers[a].friendlyName] = {
        optionID: this.answers[a].optionID,
        optionValue: this.answers[a].optionValue,
      };

      results.answers[a] = {
        questionID: this.answers[a].questionID,
        answer: answerObj,
      };
    }

    return results;
  }
}

module.exports = Answer;
