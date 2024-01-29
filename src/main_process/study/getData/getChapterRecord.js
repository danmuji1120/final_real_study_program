const { studyPath } = require("../../file_manager/dataPath");
const studyBox = require("../studyBox");
const path = require("node:path");
const loadJson = require("../../file_manager/loadData");

function getChapterRecord(
  title = studyBox.getTitle(),
  chapter = studyBox.getChapter()
) {
  const titlePath = path.join(studyPath, title, "record.json");
  const recordData = loadJson(titlePath)[chapter];
  return recordData;
}

module.exports = getChapterRecord;
