const saveRecord = require("./saveRecord");

class Record {
  constructor() {
    this.record = {};
  }
  reset() {
    this.record = {};
  }
  generateIdContainer(idList) {
    this.reset();
    idList.forEach((id) => {
      this.record[id] = {};
    });
  }
  generateIndexContainer(questionIndex, answerIndex) {
    Object.keys(this.record).forEach((id) => {
      const index = `${questionIndex}-${answerIndex}`;
      this.record[id][index] = [];
    });
  }
  pushAnswerIndex(id, questionIndex, answerIndex, correctIndex) {
    const index = `${questionIndex}-${answerIndex}`;
    console.log(id, index, correctIndex);
    if (!this.record[id][index].includes(correctIndex)) {
      this.record[id][index].push(correctIndex);
    }
  }
  save() {
    saveRecord(this.record);
  }
}

module.exports = Record;
