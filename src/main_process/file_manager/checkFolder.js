const fs = require("fs");

function checkFolder(targetPath) {
  if (!fs.existsSync(targetPath)) {
    return false;
  } else {
    return true;
  }
}

module.exports = checkFolder;
