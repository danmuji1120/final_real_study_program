const graphBox = document.getElementById("graph-box");

window.api.receive("load-chapter-data-answer", (chapterData) => {
  while (graphBox.firstChild) {
    graphBox.removeChild(graphBox.firstChild);
  }
  const testText = document.createElement("p");
  testText.textContent = chapterData;
  graphBox.appendChild(testText);

  const startBtn = document.createElement("button");
  startBtn.textContent = "시작";
  startBtn.addEventListener("click", () => {
    window.api.send("page:change", "windows/studyTestMain.html");
  });
  graphBox.appendChild(startBtn);
});
