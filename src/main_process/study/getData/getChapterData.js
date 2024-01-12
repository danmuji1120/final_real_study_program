const { studyPath } = require("../../file_manager/dataPath");
const studyBox = require("../studyBox");
const path = require("node:path");
const loadJson = require("../../file_manager/loadData");

function getChapterData() {
  const titlePath = path.join(studyPath, studyBox.getTitle(), "words.json");
  const wordsData = loadJson(titlePath);
  studyBox.setWordBox(wordsData[studyBox.getChapter()]);
  return wordsData[studyBox.getChapter()];
}

module.exports = getChapterData;
