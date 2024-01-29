const { ipcMain } = require("electron");
const studyBox = require("../studyBox");
ipcMain.on("start-remind", (event, data) => {
  studyBox.setTitle(data.title);
  studyBox.setChapter(data.chapter);

  event.sender.send("start-remind-answer");
});
