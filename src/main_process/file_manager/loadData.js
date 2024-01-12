const fs = require("fs");

function loadJson(jsonPath) {
  try {
    const data = fs.readFileSync(jsonPath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error loading JSON:", error);
    return null;
  }
}

module.exports = loadJson;
