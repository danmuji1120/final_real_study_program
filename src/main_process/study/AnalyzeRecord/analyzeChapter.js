const getChapterList = require("../getData/getChapterList");
const AnalyzeDate = require("./analyzeDate");

class AnalyzeRecord extends AnalyzeDate {
  constructor() {
    super();
  }
  getAnswerIdListPerChapter(title) {
    const result = {};
    const chapterList = getChapterList(title);
    chapterList.forEach((chapter) => {
      const data = this.getAnswerIdListPerDate(title, chapter);
      result[chapter] = data;
    });

    return result;
  }
  getCountPerChapter(title) {
    const result = {};
    const chapterList = getChapterList(title);
    chapterList.forEach((chapter) => {
      const data = this.getCountPerDate(title, chapter);
      result[chapter] = data;
    });
    return result;
  }
}

// const test = new AnalyzeRecord();
// console.log("결과: ", test.getCountPerChapter("수도"));

module.exports = AnalyzeRecord;
