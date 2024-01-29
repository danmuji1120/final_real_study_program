const studyBox = require("../studyBox");
const path = require("node:path");
const { studyPath } = require("../../file_manager/dataPath");
const loadJson = require("../../file_manager/loadData");

function getTitleWordsList(title = studyBox.getTitle()) {
  const titlePath = path.join(studyPath, title, "words.json");
  const titleData = loadJson(titlePath);
  return titleData;
}

module.exports = getTitleWordsList;
