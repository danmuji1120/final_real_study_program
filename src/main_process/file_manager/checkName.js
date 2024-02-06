const { ipcMain } = require("electron");
const { programPath } = require("./dataPath");
const checkFolder = require("./checkFolder");
const path = require("node:path");
const checkString = require("./checkString");
const newFolder = require("./newFolder");
const getTitleList = require("../study/getData/getTitleList");

ipcMain.on("check-name", (event, data) => {
  const name = data.name;
  checkValue = checkString(name);
  if (checkValue !== true) {
    event.sender.send("check-name-answer", checkValue);
  } else {
    rootPath = path.join(programPath, "data");
    newFolder(rootPath); // 루트 폴더가 존재하지 않으면 생성
    const titleList = getTitleList();
    if (titleList.includes(name)) {
      event.sender.send("check-name-answer", "중복된 이름");
    } else {
      event.sender.send("check-name-answer", true);
    }
  }
});
