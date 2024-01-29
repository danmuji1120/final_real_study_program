const { ipcMain } = require("electron");
const { programPath } = require("../../file_manager/dataPath");
const path = require("node:path");
const newFolder = require("../../file_manager/newFolder");
// const fs = require("fs");
// const checkFolder = require("../../file_manager/checkFolder");
// const sortDirectoriesByCreationDate = require("../../file_manager/loadFolder");
const getTitleList = require("../getData/getTitleList");
ipcMain.on("requset-title", (event, data) => {
  rootPath = path.join(programPath, "data");
  newFolder(rootPath);
  studyPath = path.join(rootPath, "study");
  newFolder(studyPath);
  const titleList = getTitleList();
  // folderNameList = sortDirectoriesByCreationDate(studyPath);
  event.sender.send("requset-title-answer", titleList);
});
