const { ipcMain } = require("electron");
const getChapterData = require("../getData/getChapterData");

ipcMain.on("load-chapter-data", (event, chapterName) => {
  const chpaterData = getChapterData();
  // console.log(chpaterData);
  event.sender.send("load-chapter-data-answer", chpaterData);
});
