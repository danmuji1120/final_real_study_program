const musicBox = {
  title: "",
  level: "",
  setTitle(title) {
    this.title = title;
    this.level = "";
  },
  setLevel(level) {
    this.level = level;
  },
  getTitle() {
    return this.title;
  },
  getLevel() {
    return this.level;
  },
};

module.exports = musicBox;
