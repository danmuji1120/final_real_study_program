const fs = require("fs");
// const path = require("path");

function addJsonData(filePath, newData) {
  // 기존 파일 읽기
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    // JSON 파싱
    let jsonData = {};
    try {
      jsonData = JSON.parse(data);
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
      return;
    }

    // 새로운 데이터 추가
    Object.assign(jsonData, newData);

    // JSON 파일 쓰기
    fs.writeFile(
      filePath,
      JSON.stringify(jsonData, null, 2),
      "utf8",
      (writeErr) => {
        if (writeErr) {
          console.error("Error writing file:", writeErr);
        } else {
          // console.log("Data added successfully!");
          // return true;
        }
      }
    );
  });
}

module.exports = addJsonData;
