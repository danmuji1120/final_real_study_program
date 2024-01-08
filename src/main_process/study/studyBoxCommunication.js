const { ipcMain } = require("electron");
const studyBox = require("./studyBox");

ipcMain.on("load-title-data", (event, titleName) => {
  studyBox.setTitle(titleName);
  console.log("선택된 타이틀: ", studyBox.getTitle());
});

ipcMain.on("load-chapter-data", (event, chapterName) => {
  studyBox.setChapter(chapterName);
  console.log("선택된 타이틀: ", studyBox.getTitle());
  console.log("선택된 챕터: ", studyBox.getChapter());
});

ipcMain.on("load-word-box", (event, wordData) => {
  studyBox.setWordBox(wordData);
  console.log("선택된 타이틀: ", studyBox.getTitle());
  console.log("선택된 챕터: ", studyBox.getChapter());
  console.log("선택된 챕터 데이터: ", studyBox.getWordBox());
});
