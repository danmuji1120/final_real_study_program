const { studyPath } = require("../../file_manager/dataPath");
const sortDirectoriesByCreationDate = require("../../file_manager/loadFolder");

function getTitleList() {
  const titleList = sortDirectoriesByCreationDate(studyPath);
  return titleList;
}

module.exports = getTitleList;
