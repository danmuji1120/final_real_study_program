const AnalyzeWord = require("./analyzeWord");

class AnalyzeWordList extends AnalyzeWord {
  constructor() {
    super();
  }
  getAnswerIdList(recordBox, wordBox) {
    const result = [];
    Object.keys(wordBox).forEach((wordID) => {
      if (this.isAnswer(wordBox[wordID], recordBox[wordID])) {
        result.push(wordID);
      }
    });
    return result;
  }
}

module.exports = AnalyzeWordList;
