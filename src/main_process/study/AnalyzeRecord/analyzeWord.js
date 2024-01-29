class AnalyzeWord {
  isAnswer(wordData, recordData) {
    let result = true;
    Object.keys(recordData).forEach((questionAndAnswerInedex) => {
      const [questionIndex, answerIndex] = questionAndAnswerInedex.split("-");
      if (
        wordData[parseInt(answerIndex)].length !==
        recordData[questionAndAnswerInedex].length
      ) {
        result = false;
      }
    });
    return result;
  }
}

module.exports = AnalyzeWord;

// const data1 = [["apple"], ["사과", "회사"]];
// const data2 = { "0-1": [1], "1-0": [0] };

// const test = new Record();
// console.log(test.isAnswer(data1, data2));
