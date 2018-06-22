
const getPercentage = (answers) => {
  // Finding the percentage to work from. total becomes the first percentage, then adds on next percentage.
  // Ex/ if total = 90 and the random number is 95, if the next percentage is 10, total will become 100
  // and so as 95 < 100 the answer will be the element in answers that has the percentage/weight of 10.
  let total = 0;
  const finalAnswers = [];
  const randomNumber = Math.floor(Math.random() * 100) + 0;

  answers.forEach((element) => {
    total += element.split;
    if (randomNumber < total) finalAnswers.push(element);
  });
  return finalAnswers[0];
};

const gettingAllValues = (answers, options, count) => {
  // adding a random option into the answers to hold the remaining percentage.
  // console.log(answers[0].answer);

  let newAnswers = [];
  const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 0;
  if (count < 100) {
    if (answers[0].answer !== undefined) answers.push({ answer: options[randomIndex], split: 100 - count });
    else answers.push({ lookup: options[randomIndex].lookup, split: 100 - count });

    newAnswers = answers;
  } else {
    answers.forEach((element) => {
      const newElement = element;
      newElement.split = (element.split / count) * 100;
      newAnswers.push(newElement);
    });
  }
  return newAnswers;
};

const handlePercentageSplits = async (question, config, friendlyName, answer, localInterface, step) => {
  let finalAnswer = {
    drawData: null,
    optionID: null,
    optionValue: null,
    order: -1,
    validated: false,
  };

  let answers = [];
  const options = [];
  console.log(friendlyName, '********');

  if (typeof config[friendlyName] !== 'undefined' && config[friendlyName].subType === 'lookup') {
    // Populating options with left over options, and answers with real answer data.
    question.parts[friendlyName].options.forEach((option) => {
      config[friendlyName].split.forEach((element) => {
        if (element.lookup.toUpperCase() !== option.optionValue.toUpperCase()) options.push(option);
        else answers.push({ answer: option, split: element.split });
      });
    });

    let count = 0;
    answers.forEach((elem) => { count += elem.split; });

    let answersArray = Object.assign([], answers);
    if (count < 100) answersArray = gettingAllValues(answers, options, count);

    answersArray.sort((a, b) => b.split - a.split);
    finalAnswer = getPercentage(answersArray).answer;
  } else if (typeof config[friendlyName] !== 'undefined' && config[friendlyName].subType === 'pick') {
    // Populating options array, and checking wether they are all weighted the same or not.
    const checkingAnswers = [];
    let value;
    const array = Object.assign([], config[friendlyName]).sort((a, b) => a.split - b.split);
    array.split.forEach((option, i) => {
      if (i === 0) value = option.split;
      if (option.split > value) checkingAnswers.push(option);
      else options.push(option);
    });


    if (checkingAnswers.length === 0) {
      // if all the options have the same weight.
      answers = Object.assign([], options);
      const randomNumber = Math.floor(Math.random() * (options.length - 1)) + 0;
      finalAnswer.optionValue = answers[randomNumber].lookup;
    } else {
      // if the options are all weighted differently.
      answers = Object.assign([], checkingAnswers.sort((a, b) => b.split - a.split));

      let count = 0;
      answers.forEach((elem) => { count += elem.split; });

      let answersArray = Object.assign([], answers);
      if (count < 100) answersArray = gettingAllValues(answers, options, count);
      else if (count > 100) answersArray = gettingAllValues(answers, options, count);

      const optionValueFunction = getPercentage(answersArray);
      if (optionValueFunction.lookup === undefined) finalAnswer.optionValue = optionValueFunction.answer.lookup;
      else finalAnswer.optionValue = optionValueFunction.lookup;
    }
  } else {
    // When the config[friendlyName] is undefined.
    answers = Object.assign([], question.parts[friendlyName].options);
    const randomNumber = Math.floor(Math.random() * (answers.length - 1)) + 0;
    finalAnswer = answers[randomNumber];
  }

  // checking that finalAnswer is not null.
  if (finalAnswer.optionValue === null) {
    console.log(`picking last - percentage split - ${step} - ${friendlyName}`);
    finalAnswer = answers[0];
  }

  // if (friendlyName === 'workLocationDetail') console.log(question, finalAnswer);

  // answer it and get any followon stuff
  const followon = await answer.addAnswer(question.questionID, finalAnswer.optionID, finalAnswer.optionValue, friendlyName, localInterface, step);
  return followon;
};

module.exports = handlePercentageSplits;
