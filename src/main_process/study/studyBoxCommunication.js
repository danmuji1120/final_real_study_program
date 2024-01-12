const { ipcMain } = require("electron");
const studyBox = require("./studyBox");
const { studyPath } = require("../file_manager/dataPath");
const loadJson = require("../file_manager/loadData");
const path = require("node:path");

ipcMain.on("load-title-data", (event, titleName) => {
  studyBox.setTitle(titleName);
  studyBox.setSettings(
    loadJson(path.join(studyPath, titleName, "settings.json"))
  );
  console.log("선택된 타이틀: ", studyBox.getTitle());
  console.log("선택된 설정값: ", studyBox.getSettings());
});

ipcMain.on("load-chapter-data", (event, chapterName) => {
  studyBox.setChapter(chapterName);
  console.log("선택된 타이틀: ", studyBox.getTitle());
  console.log("선택된 챕터: ", studyBox.getChapter());
  // console.log("선택된 챕터 데이터: ", studyBox.getWordBox());
});
