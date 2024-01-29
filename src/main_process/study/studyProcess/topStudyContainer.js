class TopStudy {
  constructor(wordBox) {
    this.wordBox = wordBox;
    this.questionIdList = [];
    this.randomIdList = [];
    this.currentId = 0;
  }
  setRandomIdList() {
    this.randomIdList = this.questionIdList.slice();
    shuffleArray(this.randomIdList);
  }
  setQuestionIdList(idList = Object.keys(this.wordBox)) {
    this.questionIdList = idList;
  }
  setCurrentId() {
    this.currentId = this.randomIdList.pop();
    if (this.currentId) {
      return true;
    } else {
      return false;
    }
  }
  getRandomIdList() {
    return this.randomIdList;
  }
  getCurrentId() {
    return this.currentId;
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // 현재 인덱스와 랜덤하게 선택한 인덱스의 값 교환
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
}

module.exports = TopStudy;
