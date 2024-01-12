class wordContainer {
  constructor(wordObject) {
    this.wordObject = wordObject;
  }
  getWordTitle() {
    return Object.keys(this.wordObject);
  }
  addWordTitle(wordTitle, wordData) {
    if (wordTitle in this.wordObject) {
      return "중복된 타이틀명";
    } else {
      try {
        // 새로운 키와 데이터를 추가합니다.
        this.wordObject[wordTitle] = wordData;
        return true; // 작업이 성공했을 경우 true를 반환합니다.
      } catch (error) {
        // 오류가 발생하면 해당 오류를 반환합니다.
        return error;
      }
    }
  }
  getWordData(wordTitle) {
    return this.wordObject[wordTitle];
  }
}

// 단어 저장
// 단어 마다 아이디 존재
var word = {
  level1: {
    0: [["apple"], ["사과"]],
  },
};
const test = new wordContainer(word);

// console.log(
//   "adsfasdf: ",
//   test.addWordTitle("level2", {
//     0: [["banana"], ["바나나"]],
//     1: [["cat"], ["고양이"]],
//   })
// );

// console.log(test.getWordTitle());
// console.log(test.getWordData("level2"));
// 단어를 추가할 경우 마지막 아이디에 1추가? 만약 마지막 아이디에 해당하는 단어를 삭제 후  새로운 단어를 추가한다면 오류 발생?
// 점수 데이터에 해당하는 아이디도 삭제해야 함
module.exports = wordContainer;
