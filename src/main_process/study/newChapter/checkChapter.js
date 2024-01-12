const { ipcMain } = require("electron");
const studyBox = require("../studyBox");
const { studyPath } = require("../../file_manager/dataPath");
const loadJson = require("../../file_manager/loadData");
const path = require("node:path");
const checkString = require("../../file_manager/checkString");

ipcMain.on("check-chapter-name", (event, name) => {
  const grammarCheck = checkString(name);
  if (grammarCheck !== true) {
    event.sender.send("check-chapter-name-answer", grammarCheck);
  } else {
    const title = studyBox.getTitle();
    const chapterPath = path.join(studyPath, title, "words.json");
    const wordData = loadJson(chapterPath);
    if ([...Object.keys(wordData)].includes(name)) {
      event.sender.send("check-chapter-name-answer", "중복된 챕터");
    } else {
      event.sender.send("check-chapter-name-answer", true);
    }
  }
});
