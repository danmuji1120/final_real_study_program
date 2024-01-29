const graphBox = document.getElementById("graph-box");

window.api.receive("load-chapter-data-answer", (chapterData) => {
  while (graphBox.firstChild) {
    graphBox.removeChild(graphBox.firstChild);
  }
  const chapterDataDiv = document.createElement("div");
  chapterDataDiv.style.width = "90%";
  chapterDataDiv.style.height = "80%";
  chapterDataDiv.style.margin = "10px";
  chapterDataDiv.style.overflow = "auto";
  chapterDataDiv.style.display = "flex";
  chapterDataDiv.style.position = "relative";
  const wordContainer = [];
  for (let i = 0; i < chapterData[0].length; i++) {
    const textBox = document.createElement("div");
    wordContainer.push(textBox);
  }
  Object.values(chapterData).forEach((wordData) => {
    wordData.forEach((value, index) => {
      const testText = document.createElement("p");
      testText.textContent = value;
      testText.style.textWrap = "nowrap";
      testText.style.border = "1px solid black";
      testText.style.marginRight = "10px";
      wordContainer[index].append(testText);
    });
  });
  wordContainer.forEach((element) => {
    chapterDataDiv.appendChild(element);
  });
  // chapterDataDiv.append(innerDiv);
  // testText.textContent = chapterData;
  graphBox.appendChild(chapterDataDiv);

  const btnDiv = document.createElement("div");
  btnDiv.style.display = "flex";
  btnDiv.style.justifyContent = "flex-end";
  const startBtn = document.createElement("button");
  startBtn.textContent = "시작";
  startBtn.style.marginRight = "20px";
  startBtn.style.width = "100px";
  startBtn.style.height = "50px";
  startBtn.style.fontSize = "20px";
  startBtn.style.border = "none";
  startBtn.style.borderRadius = "8px";
  startBtn.style.color = "white";
  startBtn.style.backgroundColor = "#1560BD";
  startBtn.addEventListener("click", () => {
    window.api.send("page:change", "windows/studyTestMain.html");
  });
  btnDiv.append(startBtn);
  graphBox.appendChild(btnDiv);
});
