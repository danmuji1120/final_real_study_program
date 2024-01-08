const { ipcMain } = require("electron");

const studyBox = {
  title: "",
  chapter: "",
  wordBox: {},
  setTitle(title) {
    this.title = title;
    this.chapter = "";
    this.wordBox = {};
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
  getChapter() {
    return this.chapter;
  },
  getWordBox() {
    return Object.assign({}, this.wordBox);
  },
};

module.exports = studyBox;
