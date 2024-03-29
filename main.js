// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");
const glob = require("glob");

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile("index.html");

  loadMain();
  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // 다른 페이지로 전환하는 이벤트 핸들러
  ipcMain.on("page:change", (event, page) => {
    // console.log(path.join(__dirname, page));
    mainWindow.loadFile(path.join(__dirname, page));
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
function loadMain() {
  const files = glob.sync(path.join(__dirname, "src/main_process/**/*.js"));
  files.forEach((file) => {
    require(file);
  });
}
