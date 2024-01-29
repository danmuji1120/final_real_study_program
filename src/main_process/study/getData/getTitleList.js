const { studyPath } = require("../../file_manager/dataPath");
const sortDirectoriesByCreationDate = require("../../file_manager/loadFolder");

function getTitleList() {
  return sortDirectoriesByCreationDate(studyPath);
}

module.exports = getTitleList;
