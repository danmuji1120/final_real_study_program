const addWordLineBtn = document.getElementById("addWordLineBtn");
const wordLineBox = document.getElementById("wordLineBox");
let contentLength = 0;
let lineNumber = 0;

window.api.send("load-title-settings");

window.api.receive("load-title-settings-answer", (settings) => {
  contentLength = settings.contentLen;
  console.log(contentLength);
});

addWordLineBtn.addEventListener("click", () => {
  // 라인 박스 생성
  const lineDiv = document.createElement("div");
  lineDiv.id = lineNumber;
  lineNumber += 1;
  const lineCount = document.createElement("p");
  lineCount.textContent = lineNumber + 1;
  lineDiv.appendChild(lineCount);
  for (let i = 0; i < contentLength; i++) {
    const wordInput = document.createElement("input");
    wordInput.type = "text";
    wordInput.value = lineDiv.id;
    lineDiv.appendChild(wordInput);
  }
  // 라인 삭제 버튼
  const wordLineDeleteBtn = document.createElement("button");
  wordLineDeleteBtn.textContent = "-";
  wordLineDeleteBtn.addEventListener("click", () => {
    const lines = [...wordLineBox.children];
    const line = lines.find((line) => line.id === lineDiv.id);
    wordLineBox.removeChild(line);
  });

  // 요소 추가
  lineDiv.appendChild(wordLineDeleteBtn);
  wordLineBox.append(lineDiv);
  console.log(wordLineBox.children.length);
});
