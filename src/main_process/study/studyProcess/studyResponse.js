const { ipcMain } = require("electron");
const LowerStudy = require("./lowerStudyContainer");
const studyBox = require("../studyBox");

var mainStudy;

ipcMain.on("start-study", (event, data) => {
  mainStudy = new LowerStudy(studyBox.getWordBox(), studyBox.getSettings());
  mainStudy.start();
  event.sender.send("study-answer-answer", mainStudy.message);
});

ipcMain.on("study-answer", (event, userAnswer) => {
  console.log("입력이 메인에 들어옴");
  if (mainStudy.answer(userAnswer)) {
    event.sender.send("study-answer-answer", mainStudy.message);
  } else {
    event.sender.send("study-answer-answer", false);
  }
});
