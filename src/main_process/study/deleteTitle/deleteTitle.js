const { ipcMain } = require("electron");
const { studyPath } = require("../../file_manager/dataPath");
const path = require("node:path");
const fs = require("fs");

ipcMain.on("delete-title", (event, titleName) => {
  const titlePath = path.join(studyPath, titleName);
  fs.rmdir(titlePath, () => {
    console.log("타이틀 삭제");
  });
});
