const { ipcMain } = require("electron");
const programPath = require("../../file_manager/dataPath");
const checkFolder = require("../../file_manager/checkFolder");
const path = require("node:path");
const newFolder = require("../../file_manager/newFolder");
const fs = require("fs");
const sortDirectoriesByCreationDate = require("../../file_manager/loadFolder");

ipcMain.on("requset-title", (event, data) => {
  rootPath = path.join(programPath, "data");
  newFolder(rootPath);
  studyPath = path.join(rootPath, "study");
  newFolder(studyPath);
  folderNameList = sortDirectoriesByCreationDate(studyPath);
  event.sender.send("requset-title-answer", folderNameList);
});
