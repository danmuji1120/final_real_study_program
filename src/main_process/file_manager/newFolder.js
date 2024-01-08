const fs = require("fs");

function newFolder(targetPath) {
  if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath);
    return false;
  } else {
    return true;
  }
}

module.exports = newFolder;
