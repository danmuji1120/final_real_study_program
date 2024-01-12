const submitNewChapterBtn = document.getElementById("submitNewChapterBtn");
const submitNewChapterStatus = document.getElementById(
  "submitNewChapterStatus"
);
submitNewChapterBtn.addEventListener("click", () => {
  const renderedData = renderWordLine();
  console.log(renderedData);
  if (!inputChapterName.disabled) {
    submitNewChapterStatus.textContent = "이름 확인 받으세요";
  } else {
    const newData = {};
    newData[inputChapterName.value] = renderedData;
    window.api.send("save-new-chapter", newData);
  }
});

window.api.receive("save-new-chapter-answer", (result) => {
  console.log(result);
  if (result !== true) {
    submitNewChapterStatus.textContent = result;
    submitNewChapterStatus.style.color = "red";
  } else {
    window.api.send("page:change", "windows/studyMain.html");
  }
});
