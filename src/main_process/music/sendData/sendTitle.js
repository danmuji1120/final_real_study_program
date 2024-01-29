const { ipcMain } = require("electron");
const musicData = require("../data/musicData");
ipcMain.on("request-music-title", (event) => {
  const result = [];
  Object.keys(musicData).forEach((key) => {
    result.push(musicData[key].name);
  });
  event.sender.send("request-music-title-answer", result);
});
