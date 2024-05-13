// 모든 파일을 검사하여 존재하지 않는 파일을 생성한다.
const getTitleList = require("./getData/getTitleList");
const getChapterList = require("./getData/getChapterList");
const path = require("path");
const { studyPath } = require("../file_manager/dataPath");
const checkFolder = require("../file_manager/checkFolder");
const writeJson = require("../file_manager/saveData");

const titleList = getTitleList();

titleList.forEach((title) => {
  const chapterList = getChapterList(title);

  const titlePath = path.join(studyPath, title);
  const recordPath = path.join(titlePath, "record.json");
  const settingsPath = path.join(titlePath, "settings.json");
  const wordsPath = path.join(titlePath, "words.json");
  const trashCanPath = path.join(titlePath, "trashCan.json");

  if (!checkFolder(recordPath)) {
    writeJson(recordPath, {});
  }
  if (!checkFolder(settingsPath)) {
    writeJson(settingsPath, {
      name: title,
      contentLen: 2,
      contentText: ["단어", "뜻"],
      testMode: "twoWay",
      ignoreSpecial: true,
      incorrectAnswerNote: true,
      answerCount: true,
    });
  }
  if (!checkFolder(wordsPath)) {
    writeJson(wordsPath, {});
  }
  if (!checkFolder(trashCanPath)) {
    writeJson(trashCanPath, {});
  }
});
