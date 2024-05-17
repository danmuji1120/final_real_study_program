const secretBtn = document.getElementById("secretBtn");

secretBtn.addEventListener("change", (event) => {
  if (secretBtn.checked) {
    questionTitle.className = "questionTitle-hiden";
    responseStatus.className = "responseStatus-hiden";
    userAnswer.className = "userAnswer-hiden";
    correctBtn.className = "correctBtn-hiden";
  }
  if (!secretBtn.checked) {
    questionTitle.className = "questionTitle";
    responseStatus.className = "responseStatus";
    userAnswer.className = "userAnswer";
    correctBtn.className = "correctBtn";
  }
  console.log("checked");
});
