const questionTitle = document.getElementById("questionTitle");
const userAnswer = document.getElementById("userAnswer");
const responseStatus = document.getElementById("responseStatus");
window.api.send("start-study");
// 모든 등록된 이벤트 타입 가져오기

console.log("asdfasdf");

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
      console.log("키입력");
      window.api.send("study-answer", userAnswer.value);
      userAnswer.value = "";
    }
  })
);
// console.log(getEventListeners(userAnswer));

window.api.receive("study-answer-answer", (data) => {
  console.log(data);
  questionTitle.textContent = data.questionData;
  responseStatus.textContent = data.message.text;
  responseStatus.style.color = data.message.color;
});
