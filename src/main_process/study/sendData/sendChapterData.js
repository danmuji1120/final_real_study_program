const { ipcMain } = require("electron");
const getChapterData = require("../getData/getChapterData");
const studyBox = require("../studyBox");

ipcMain.on("load-chapter-data", (event, chapterName) => {
  const chpaterData = getChapterData(
    studyBox.getTitle(),
    studyBox.getChapter()
  );
  // console.log(chpaterData);
  event.sender.send("load-chapter-data-answer", chpaterData);
});
