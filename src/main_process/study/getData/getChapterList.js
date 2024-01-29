const studyBox = require("../studyBox");
const getTitleWordsList = require("./getTitleWordsList");

function getChapterList(title = studyBox.getTitle()) {
  const titleData = getTitleWordsList(title);
  return Object.keys(titleData);
}

module.exports = getChapterList;
