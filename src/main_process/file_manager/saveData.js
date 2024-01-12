const fs = require("fs");
const path = require("path");

function writeJson(jsonPath, data) {
  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), (error) => {
    if (error) {
      console.log("Json 저장 실패", error);
      return;
    }
    console.log("Json 저장 성공");
  });
}

module.exports = writeJson;

// function writeJson(jsonPath, data) {
//   fs.writeFile(jsonPath, JSON.stringify(data, null, 2), (error) => {
//     if (error) {
//       console.log("Json 저장 실패", error);
//       return;
//     }
//     console.log("Json 저장 성공");
//   });
// }
