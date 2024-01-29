// titleBox requestTitle.js에서 선언
window.api.receive("load-title-data-answer", (wordBox) => {
  // 기존 타이틀 버튼을 삭제
  while (titleBox.firstChild) {
    titleBox.removeChild(titleBox.firstChild);
  }
  while (graphBox.firstChild) {
    graphBox.removeChild(graphBox.firstChild);
  }
  const fragmentChapterBtn = document.createDocumentFragment();
  Object.keys(wordBox).forEach((key) => {
    const chapterBtn = document.createElement("button");
    chapterBtn.textContent = key;
    chapterBtn.addEventListener("click", () => {
      window.api.send("load-chapter-data", key);
    });
    fragmentChapterBtn.appendChild(chapterBtn);
  });
  const addChapterBtn = document.createElement("button");
  addChapterBtn.textContent = "+";
  addChapterBtn.addEventListener("click", () => {
    window.api.send("page:change", "windows/newChapterPopup.html");
  });
  fragmentChapterBtn.appendChild(addChapterBtn);
  titleBox.append(fragmentChapterBtn);
});
