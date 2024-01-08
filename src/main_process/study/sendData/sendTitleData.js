const { ipcMain } = require("electron");
const path = require("node:path");
const writeJson = require("../../file_manager/saveData");
const programPath = require("../../file_manager/dataPath");
const checkFolder = require("../../file_manager/checkFolder");

ipcMain.on("load-title-data", (event, titleName) => {
  const rootPath = path.join(programPath, "data", "study", titleName);
  const wordPath = path.join(rootPath, "words.json");
  const recordPath = path.join(rootPath, "record.json");
  // 단어 파일과 점수 파일이 존재하지 않으면 생성
  if (!checkFolder(wordPath)) {
    writeJson(wordPath, {});
  }
  if (!checkFolder(recordPath)) {
    writeJson(recordPath, {});
  }
});
