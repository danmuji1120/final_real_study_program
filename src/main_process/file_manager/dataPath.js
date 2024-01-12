const { app } = require("electron");
const path = require("node:path");

programPath = app.getPath("userData");
studyPath = path.join(programPath, "data", "study");
module.exports = { programPath, studyPath };
