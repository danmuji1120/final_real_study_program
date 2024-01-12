const { ipcMain } = require("electron");
const addJsonData = require("../../file_manager/addJsonData");
const { studyPath } = require("../../file_manager/dataPath");
const path = require("node:path");
const studyBox = require("../studyBox");
const checkNewChapterData = require("./checkNewChapterData");

ipcMain.on("save-new-chapter", (event, newData) => {
  const dataCheckResult = checkNewChapterData(newData[Object.keys(newData)[0]]);
  if (dataCheckResult !== true) {
    event.sender.send("save-new-chapter-answer", dataCheckResult);
  } else {
    const titlePath = path.join(studyPath, studyBox.getTitle(), "words.json");
    addJsonData(titlePath, newData);
    event.sender.send("save-new-chapter-answer", true);
  }
});
