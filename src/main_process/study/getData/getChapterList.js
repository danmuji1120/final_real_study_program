const studyBox = require("../studyBox");
const getTitleWordsList = require("./getTitleWordsList");

function getChapterList(title = studyBox.getTitle()) {
  const titleData = getTitleWordsList(title);
  // console.log("불러온 타이틀 데이터: ", titleData);
  const chapterList = Object.keys(titleData);
  // console.log("불러온 챕터: ", chapterList);

  return chapterList;
}

module.exports = getChapterList;
