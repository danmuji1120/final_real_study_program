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
  btnDiv.style.width = "100%";
  btnDiv.style.justifyContent = "space-between";
  btnDiv.style.marginBottom = "30px";
  // btnDiv.style.alignConten = "space-between";
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
  startBtn.style.margin = "30px";

  startBtn.addEventListener("click", () => {
    window.api.send("page:change", "windows/studyTestMain.html");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  deleteBtn.style.marginRight = "20px";
  deleteBtn.style.width = "100px";
  deleteBtn.style.height = "50px";
  deleteBtn.style.fontSize = "20px";
  deleteBtn.style.border = "none";
  deleteBtn.style.borderRadius = "8px";
  deleteBtn.style.color = "white";
  deleteBtn.style.backgroundColor = "red";
  deleteBtn.style.margin = "30px";

  deleteBtn.addEventListener("click", () => {
    window.api.send("delete-chapter", {});
  });

  btnDiv.append(deleteBtn);
  btnDiv.append(startBtn);
  graphBox.appendChild(btnDiv);
});

window.api.receive("delete-chapter-answer", (result) => {
  if (result == 1) {
    window.api.send("load-title-data", null);
  }
});
