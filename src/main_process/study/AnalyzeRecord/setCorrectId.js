function setCorrectId(recordData, wordBox) {
  const correctId = [];
  Object.keys(recordData).forEach((id) => {
    let answerToggle = true;
    Object.keys(recordData[id]).forEach((startToEnd) => {
      const [questionIndex, answerIndex] = startToEnd.split("-");
      if (
        recordData[id][startToEnd].length !==
        wordBox[id][parseInt(answerIndex)].length
      ) {
        answerToggle = false;
      }
    });
    if (answerToggle === true) {
      correctId.push(id);
    }
  });
  return correctId;
}

module.exports = setCorrectId;
