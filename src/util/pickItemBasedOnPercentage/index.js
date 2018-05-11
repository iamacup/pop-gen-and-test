
const { getRandomInt } = require('../../scripts/randomFunctions');

const pickItemBasedOnPercentage = (arr, percentageAttr) => {
  // work out how many education we are going to make
  const useArr = arr;

  let total = 0;

  useArr.forEach((value, index) => {
    useArr[index].startRange = total;
    useArr[index].endRange = (total + value[percentageAttr]);
    total += value[percentageAttr];
  });

  let pickValue = null;
  const pickedNum = getRandomInt(0, 100);

  useArr.forEach((value) => {
    if (pickedNum >= value.startRange && pickedNum <= value.endRange) {
      pickValue = value;
    }
  });

  if (pickValue === null) {
    console.log('picking last');
    pickValue = useArr[useArr.length - 1];
  }

  return pickValue;
};

module.exports = pickItemBasedOnPercentage;
