const studyBox = require("../studyBox");
const getTitleWordsList = require("./getTitleWordsList");

function getChapterData(title, chapter) {
  const wordsData = getTitleWordsList(title);
  return wordsData[chapter];
}

module.exports = getChapterData;
