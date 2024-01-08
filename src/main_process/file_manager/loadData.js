const fs = require("fs");
const path = require("path");

function loadJson(jsonPath) {
  fs.readFile(jsonPath, "utf8", (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    return JSON.parse(data);
  });
}

module.exports = loadJson;
