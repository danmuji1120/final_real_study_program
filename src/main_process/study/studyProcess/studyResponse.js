const { ipcMain } = require("electron");
const LowerStudy = require("./lowerStudyContainer");
const studyBox = require("../studyBox");

var mainStudy;

ipcMain.on("start-study", (event, data) => {
  mainStudy = new LowerStudy(studyBox.getWordBox(), studyBox.getSettings());
  mainStudy.start();
  event.sender.send("study-answer-answer", {
    questionData: mainStudy.getQuestionData(),
    message: mainStudy.getMessage(),
  });
});

ipcMain.on("study-answer", (event, userAnswer) => {
  console.log("입력이 메인에 들어옴");
  if (mainStudy.answerEvent(userAnswer)) {
    event.sender.send("study-answer-answer", {
      questionData: mainStudy.getQuestionData(),
      message: mainStudy.getMessage(),
    });
  } else {
    if (mainStudy.incorrectAnswerNoteMode === false) {
      mainStudy.save();
      event.sender.send("study-answer-answer", {
        questionData: "끝났습니다.",
        message: { text: "", color: "" },
      });
    }
  }
});
