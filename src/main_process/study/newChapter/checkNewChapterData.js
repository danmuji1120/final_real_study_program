function checkNewChapterData(data) {
  let result = true;
  if (Object.keys(data).length === 0) {
    result = "뭐라도 좀 넣어라";
  } else {
    Object.values(data).forEach((element) => {
      element.forEach((value) => {
        value.forEach((innerValue) => {
          if (innerValue === "") {
            result = "빈 칸이 존재함";
          }
        });
      });
    });
  }
  return result;
}
module.exports = checkNewChapterData;
