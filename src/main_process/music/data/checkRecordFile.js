const newFolder = require("../../file_manager/newFolder");
const { musicPath } = require("../../file_manager/dataPath");
const fs = require("fs");
const path = require("path");
const musicData = require("./musicData");
newFolder(musicPath);
fs.readFile(path.join(musicPath, "record.json"), (err, data) => {
  if (err) {
    const result = {};
    Object.keys(musicData).forEach((titleName) => {
      result[titleName] = {};
      Object.keys(musicData[titleName]["level"]).forEach((levelName) => {
        result[titleName][levelName] = {};
      });
    });
    fs.writeFile(
      path.join(musicPath, "record.json"),
      JSON.stringify(result),
      (err) => {
        throw err;
      }
    );
  } else {
    data = JSON.parse(data);
    const dataKeys = Object.keys(data);
    Object.keys(musicData).forEach((key) => {
      if (!dataKeys.includes(key)) {
        data[key] = {};
      }
      const levels = Object.keys(data[key]);
      Object.keys(musicData[key]["level"]).forEach((level) => {
        if (!levels.includes(level)) {
          data[key][level] = {};
        }
      });
    });
    fs.writeFile(
      path.join(musicPath, "record.json"),
      JSON.stringify(data),
      (err) => {
        if (err) {
          throw err;
        }
      }
    );
  }
});
