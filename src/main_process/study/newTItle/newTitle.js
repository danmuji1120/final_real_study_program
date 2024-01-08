const { ipcMain } = require("electron");
const programPath = require("../../file_manager/dataPath");
const checkFolder = require("../../file_manager/checkFolder");
const path = require("node:path");
const writeJson = require("../../file_manager/saveData");
const checkString = require("../../file_manager/checkString");
const newFolder = require("../../file_manager/newFolder");

ipcMain.on("new-test-box", (event, data) => {
  try {
    console.log("adfadsfa: ", rootPath);
    newFolder(rootPath);
    studyPath = path.join(rootPath, "study");
    newFolder(studyPath);
    mainPath = path.join(studyPath, data.name);
    newFolder(mainPath);
    writeJson(path.join(mainPath, "settings.json"), data);
    event.sender.send("new-test-box-answer", true);
  } catch (error) {
    event.sender.send("new-test-box-answer", false);
  }
});
