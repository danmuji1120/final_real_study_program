const { ipcMain } = require("electron");
const getTitleSettings = require("../getData/getTitleSettings");

ipcMain.on("load-title-settings", (event, data) => {
  event.sender.send("load-title-settings-answer", getTitleSettings());
});
