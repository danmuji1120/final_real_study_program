const getChapterData = require("../getData/getChapterData");
const getChapterRecord = require("../getData/getChapterRecord");
const AnalyzeWordList = require("./analyzeWordList");

class AnalyzeDate extends AnalyzeWordList {
  constructor() {
    super();
  }
  getAnswerIdListPerDate(title, chapter) {
    const recordPerDate = getChapterRecord(title, chapter);
    const chapterWordBox = getChapterData(title, chapter);
    const result = { record: {}, total: Object.keys(chapterWordBox).length };
    Object.keys(recordPerDate).forEach((date) => {
      result.record[date] = this.getAnswerIdList(
        recordPerDate[date],
        chapterWordBox
      );
    });
    return result;
  }
  getCountPerDate(title, chapter) {
    const result = {};
    const recordPerDate = getChapterRecord(title, chapter);
    Object.keys(recordPerDate).forEach((date) => {
      date = date.match(/\d{4}-\d{2}-\d{2}/)[0];
      if (Object.keys(result).includes(date)) {
        result[date] += 1;
      } else {
        result[date] = 1;
      }
    });
    return result;
  }
}

module.exports = AnalyzeDate;
