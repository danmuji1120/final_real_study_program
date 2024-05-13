const { ipcMain } = require("electron");
const deleteChapter = require("./deleteChapter");
const studyBox = require("../studyBox");

ipcMain.on("delete-chapter", (event, data) => {
  const title = studyBox.getTitle();
  const chapter = studyBox.getChapter();
  const result = deleteChapter(title, chapter);
  if (result == 1) {
    studyBox.setChapter("");
  }
  event.sender.send("delete-chapter-answer", result);
});
