const studyBox = {
  title: "",
  chapter: "",
  settings: {},
  wordBox: {},
  setTitle(title) {
    this.title = title;
    this.chapter = "";
    this.wordBox = {};
  },
  setSettings(settingsValue) {
    this.settings = settingsValue;
  },
  setChapter(chapter) {
    this.chapter = chapter;
    this.wordBox = {};
  },
  setWordBox(wordBox) {
    this.wordBox = wordBox;
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
