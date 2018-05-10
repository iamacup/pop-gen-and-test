
const colors = require('colors');
const _ = require('lodash');

class Answer {
  constructor(sessionID, additionalSendData) {
    this.sessionID = sessionID;
    this.answers = [];
    this.additionalSendData = additionalSendData;
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
      // we have to see if there is already something for this question ID
      const keys = Object.keys(results.answers);
      let done = false;

      for (let b = 0; b < keys.length; b++) {
        if (results.answers[keys[b]].questionID === this.answers[a].questionID) {
          results.answers[keys[b]].answer[this.answers[a].friendlyName] = {
            optionID: this.answers[a].optionID,
            optionValue: this.answers[a].optionValue,
          };

          done = true;
        }
      }

      // otherwise we just ad the result
      if (done === false) {
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
    }

    let finalResult = results;

    if (typeof this.additionalSendData !== 'undefined') {
      finalResult = _.assign({}, results, this.additionalSendData);
    }

    return finalResult;
  }
}

module.exports = Answer;
