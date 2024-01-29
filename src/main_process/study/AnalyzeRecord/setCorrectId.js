function setCorrectId(recordData, wordBox) {
  const correctId = [];
  Object.keys(wordBox).forEach((id) => {
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

// const { studyPath } = require("../../file_manager/dataPath");
// const loadJson = require("../../file_manager/loadData");
// const path = require("node:path");

// const chapterPath = path.join(studyPath, "수도");
// const wordBoxPath = path.join(chapterPath, "words.json");
// const recordPath = path.join(chapterPath, "record.json");
// const wordBoxData = loadJson(wordBoxPath);
// const recordData = loadJson(recordPath);

// console.log(
//   setCorrectId(
//     recordData["아시아"][Object.keys(recordData["아시아"])[0]],
//     wordBoxData["아시아"]
//   )
// );
