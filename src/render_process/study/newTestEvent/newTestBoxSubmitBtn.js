const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
const whitespaceRegex = /\s/;
const emptyStringRegex = /^\s*$/;

const submitBtn = document.getElementById("submitBtn");
const submitStatus = document.getElementById("submitStatus");
const textName = document.getElementById("inputName");
const range = document.getElementById("inputRange");
const rangeContents = [...document.getElementById("nameBox").children];
const testMode = [...document.getElementById("checkBox").children].filter(
  (child) => child.tagName === "INPUT"
);
const incorrectAnswerNote = document.getElementById("incorrectAnswerNote");
const answerCount = document.getElementById("answerCount");

function checkText(text) {
  if (specialCharacterRegex.test(text) === true) {
    return "입력에 특수문자는 안됩니다.";
  } else if (whitespaceRegex.test(text) === true) {
    return "입력에 띄어쓰기는 안됩니다.";
  } else if (emptyStringRegex.test(text) === true) {
    return "빈 칸을 다 채우세요";
  } else {
    return true;
  }
}

submitBtn.addEventListener("click", () => {
  contextCheck = true;
  contextData = [];
  rangeContents.forEach((element) => {
    console.log("text상태: ", element.disabled);

    if (element.disabled === false) {
      contextCheck = checkText(element.value);
      if (contextCheck === true) {
        contextData.push(element.value);
      }
    }
  });
  let selectedMode = "";
  testMode.forEach((element) => {
    console.log(element.id);
    if (element.checked === true) {
      selectedMode = element.id;
    }
  });
  if (textName.disabled === false) {
    submitStatus.textContent = "이름 확인 받으세요";
  } else if (contextCheck !== true) {
    submitStatus.textContent = contextCheck;
  } else {
    submitStatus.textContent = "통과";
    const newTestData = {
      name: textName.value,
      contentLen: range.value,
      contentText: contextData,
      testMode: selectedMode,
      incorrectAnswerNote: incorrectAnswerNote.checked,
      answerCount: answerCount.checked,
    };
    window.api.send("new-test-box", newTestData);
  }
});

window.api.receive("new-test-box-answer", (data) => {
  if (data === true) {
    console.log("저장 성공");
    submitStatus.textContent = "저장 성공 3초 후 메인으로 이동";
    setTimeout(() => {
      window.api.send("page:change", "windows/studyMain.html");
    }, 3000);
  }
});
