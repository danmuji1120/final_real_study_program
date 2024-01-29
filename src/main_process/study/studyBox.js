const getChapterData = require("./getData/getChapterData");
const getTitleSettingsData = require("./getData/getTItleSettingsData");

const studyBox = {
  title: "",
  chapter: "",
  settings: {},
  wordBox: {},
  setTitle(title) {
    this.title = title;
    this.settings = getTitleSettingsData(title);
    this.chapter = "";
    this.wordBox = {};
  },
  setChapter(chapter) {
    this.chapter = chapter;
    this.wordBox = getChapterData(this.title, chapter);
  },
  getTitle() {
    return this.title;
  },
  getSettings() {
    return this.settings;
  },
  getChapter() {
    return this.chapter;
  },
  getWordBox() {
    return Object.assign({}, this.wordBox);
  },
};

module.exports = studyBox;
