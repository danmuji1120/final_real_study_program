const { studyPath } = require("../../file_manager/dataPath");
const studyBox = require("../studyBox");
const path = require("node:path");
const loadJson = require("../../file_manager/loadData");

function getTitleSettings() {
  const titlePath = path.join(studyPath, studyBox.getTitle(), "settings.json");
  const settingsValue = loadJson(titlePath);
  return settingsValue;
}

module.exports = getTitleSettings;
