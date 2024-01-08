const { app } = require("electron");

programPath = app.getPath("userData");

module.exports = programPath;
