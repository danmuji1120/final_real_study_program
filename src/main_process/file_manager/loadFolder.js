const fs = require("fs");
// 폴더를 생성일자 순으로 정렬하는 함수
function sortDirectoriesByCreationDate(directoryPath) {
  // 폴더 목록을 읽어옴
  const directories = fs
    .readdirSync(directoryPath, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => ({
      name: item.name,
      birthtimeMs: item.birthtimeMs, // 폴더의 생성일자 정보
    }));

  // 생성일자를 기준으로 정렬
  const sortedDirectories = directories.sort(
    (a, b) => a.birthtimeMs - b.birthtimeMs
  );

  // 정렬된 폴더 이름들을 반환
  return sortedDirectories.map((item) => item.name);
}

module.exports = sortDirectoriesByCreationDate;
