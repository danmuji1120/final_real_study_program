const questionTitle = document.getElementById("questionTitle");
const userAnswer = document.getElementById("userAnswer");
const responseStatus = document.getElementById("responseStatus");
const correctBtn = document.getElementById("correctBtn");
window.api.send("start-study");
// 모든 등록된 이벤트 타입 가져오기

// console.log("asdfasdf");

correctBtn.addEventListener("click", () => {
  console.log("강제 정답 처리 클릭됨");
  window.api.send("study-answer", true);
  userAnswer.value = "";
});

const debounce = (callback, delay) => {
  let timerId;
  return (event) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(callback, delay, event);
  };
};

userAnswer.addEventListener(
  "keydown",
  debounce((event) => {
    if (event.key === "Enter") {
      // console.log("키입력");
      window.api.send("study-answer", userAnswer.value);
      userAnswer.value = "";
    }
  })
);

// console.log(getEventListeners(userAnswer));

window.api.receive("study-answer-answer", (data) => {
  if (data !== false) {
    questionTitle.textContent = data.question;
    responseStatus.textContent = data.statusText;
    responseStatus.style.color = data.statusColor;
  } else {
    window.api.send("page:change", "./windows/studyMain.html");
  }
});
