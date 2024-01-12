const { studyPath } = require("../../file_manager/dataPath");
const saveJson = require("../../file_manager/saveData");
const path = require("node:path");
const studyBox = require("../studyBox");
const loadJson = require("../../file_manager/loadData");

function saveRecord(newData) {
  const recordPath = path.join(studyPath, studyBox.getTitle(), "record.json");
  const recordData = loadJson(recordPath);
  console.log("저장할 경로: ", recordPath);
  console.log("원본 데이터: ", recordData);
  console.log("새로운 데이터: ", newData);
  if (recordData[studyBox.getChapter]) {
    recordData[studyBox.getChapter()][nowDate()] = newData;
  } else {
    recordData[studyBox.getChapter()] = {};
    recordData[studyBox.getChapter()][nowDate()] = newData;
  }
  saveJson(recordPath, recordData);
}

function nowDate() {
  const now = new Date();
  const result = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(now.getDate()).padStart(2, "0")}-${String(
    now.getHours()
  ).padStart(2, "0")}-${String(now.getMinutes()).padStart(2, "0")}-${String(
    now.getSeconds()
  ).padStart(2, "0")}`;
  return result;
}

module.exports = saveRecord;
