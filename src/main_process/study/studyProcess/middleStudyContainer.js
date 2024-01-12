const Study = require("./topStudyContainer");

class MiddleStudy extends Study {
  constructor(wordBox) {
    super(wordBox);
    this.questionIndex = 0;
    this.answerIndex = 1;
  }
  getQuestionData() {
    return this.wordBox[this.currentId][this.questionIndex];
  }
  getAnswerData() {
    return this.wordBox[this.currentId][this.answerIndex];
  }
  // 문제 인덱스와 정답 인덱스를 서로 교환한다.
  changeIndex() {
    const preIndex = this.questionIndex;
    this.questionIndex = this.answerIndex;
    this.answerIndex = preIndex;
  }
  // 문제 인덱스를 1증가 할 수 있으면 증가하고 true반환 문제의 길이가 짧아 불가능하다면 1로 초기화 후 false 반환
  moveIndex() {
    const wordBoxLength = Object.values(this.wordBox)[0].length;
    if (this.answerIndex === 0) {
      console.log("여기 실행 맞잖아");
      return false;
    } else if (this.answerIndex < wordBoxLength - 1) {
      console.log("여기야?");
      this.answerIndex += 1;
      return true;
    } else {
      console.log("여긴아니잖아?");

      this.answerIndex = 1;
      return false;
    }
  }
}

module.exports = MiddleStudy;
