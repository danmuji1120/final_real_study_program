const { studyPath } = require("../../file_manager/dataPath");
const path = require("path");
const loadJson = require("../../file_manager/loadData");
const saveJson = require("../../file_manager/saveData");

function deleteChapter(title, chapter) {
  const titlePath = path.join(studyPath, title);
  const wordsPath = path.join(titlePath, "words.json");
  const recordPath = path.join(titlePath, "record.json");
  const trashPath = path.join(titlePath, "trashCan.json");

  const wordsData = loadJson(wordsPath);
  const recordData = loadJson(recordPath);
  const trashData = loadJson(trashPath);
  try {
    const deleteData = wordsData[chapter];
    delete wordsData[chapter];

    const deleteRecord = recordData[chapter];
    delete recordData[chapter];

    trashData[chapter] = { words: deleteData, record: deleteRecord };

    saveJson(wordsPath, wordsData);
    saveJson(recordPath, recordData);
    saveJson(trashPath, trashData);

    console.log("success delete:  ", chapter);
    return 1;
  } catch {
    console.log("fail delete");
    return 0;
  }
}
module.exports = deleteChapter;
