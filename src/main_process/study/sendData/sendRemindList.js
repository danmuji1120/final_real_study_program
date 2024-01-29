const { ipcMain } = require("electron");
const AnalyzeRecord = require("../AnalyzeRecord/analyzeChapter");
const getTitleList = require("../getData/getTitleList");
const daysAgo = require("../../util/daysAgo");

ALLOW_PERSENT = 90;

ipcMain.on("remind-list", (event) => {
  const countAndDays = {};
  const targetList = [];
  const titleList = getTitleList();
  const analyzer = new AnalyzeRecord();
  titleList.forEach((title) => {
    countAndDays[title] = {};
    const data = analyzer.getAnswerIdListPerChapter(title);
    console.log(data);
    Object.keys(data).forEach((chapter) => {
      let count = 0;
      let preDate = "NULL";
      let lastCorrectPersent = 0;
      Object.keys(data[chapter].record).forEach((date) => {
        const correctPersent = parseInt(
          (data[chapter].record[date].length / data[chapter].total) * 100
        );
        lastCorrectPersent = correctPersent;
        const onlyDate = date.match(/\d{4}-\d{2}-\d{2}/)[0];
        // console.log("onlyDate", onlyDate, " preDate: ", preDate);
        if (correctPersent >= ALLOW_PERSENT) {
          if (onlyDate !== preDate) {
            count += 1;
          }
        } else {
          count = 0;
        }
        preDate = onlyDate;
      });
      const days = daysAgo(preDate);
      countAndDays[title][chapter] = { count: count, days: days };
      const remindDay = getRemindDay(count, days);
      if (remindDay !== false) {
        targetList.push({
          title: title,
          chapter: chapter,
          days: remindDay,
          lastCorrectPersent: lastCorrectPersent,
        });
      }
    });
  });

  event.sender.send("remind-list-answer", targetList);
});

function getRemindDay(count, days) {
  if (count === 0) {
    return days;
  } else {
    const dDay = parseInt((count * count) ** (1 / 3));
    if (dDay <= days) {
      return days - dDay;
    } else {
      return false;
    }
  }
}
// console.log(remindDay(1, 2));

// console.log(countAndDays);
// console.log(targetList);
