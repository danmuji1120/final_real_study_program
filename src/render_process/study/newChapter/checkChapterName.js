const inputChapterName = document.getElementById("inputChapterName");
const checkChapterNameBtn = document.getElementById("checkChapterNameBtn");
const checkChapterNameStatus = document.getElementById(
  "checkChapterNameStatus"
);

checkChapterNameBtn.addEventListener("click", () => {
  window.api.send("check-chapter-name", inputChapterName.value);
});

window.api.receive("check-chapter-name-answer", (result) => {
  if (result !== true) {
    checkChapterNameStatus.textContent = result;
    checkChapterNameStatus.style.color = "red";
  } else {
    checkChapterNameStatus.textContent = "사용가능";
    checkChapterNameStatus.style.color = "green";
    inputChapterName.disabled = true;
  }
});
