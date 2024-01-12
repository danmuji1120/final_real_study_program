const { ipcMain } = require("electron");
const studyBox = require("../studyBox");

ipcMain.on("start-study", (event) => {
  console.log("시작할 타이틀: ", studyBox.getTitle());
  console.log("시작할 챕터: ", studyBox.getChapter());
  console.log(
    "시작할 데이터: ",
    JSON.stringify(studyBox.getWordBox(), null, 2)
  );
});
