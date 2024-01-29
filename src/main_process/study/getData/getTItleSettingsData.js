const loadJson = require("../../file_manager/loadData");
const studyBox = require("../studyBox");
const path = require("node:path");

function getTitleSettingsData(title = studyBox.getTitle) {
  const settingsPath = path.join(studyPath, title, "settings.json");
  const settingsData = loadJson(settingsPath);
  return settingsData;
}

module.exports = getTitleSettingsData;
