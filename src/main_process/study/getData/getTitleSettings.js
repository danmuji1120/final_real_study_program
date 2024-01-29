const { studyPath } = require("../../file_manager/dataPath");
const studyBox = require("../studyBox");
const path = require("node:path");
const loadJson = require("../../file_manager/loadData");

function getTitleSettings(title = studyBox.getTitle()) {
  const titlePath = path.join(studyPath, title, "settings.json");
  const settingsValue = loadJson(titlePath);
  return settingsValue;
}

module.exports = getTitleSettings;
