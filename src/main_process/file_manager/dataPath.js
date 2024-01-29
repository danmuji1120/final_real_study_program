const { app } = require("electron");
const path = require("node:path");

programPath = app.getPath("userData");
studyPath = path.join(programPath, "data", "study");
musicPath = path.join(programPath, "data", "music");
module.exports = { programPath, studyPath, musicPath };
