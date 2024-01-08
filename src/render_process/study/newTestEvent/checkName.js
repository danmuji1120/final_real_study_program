const checkName = document.getElementById("checkName");
const inputName = document.getElementById("inputName");
const statusName = document.getElementById("statusName");

checkName.addEventListener("click", (event) => {
  console.log(inputName.value);
  window.api.send("check-name", { name: inputName.value });
});

window.api.receive("check-name-answer", (data) => {
  if (data !== true) {
    statusName.style.color = "red";
    statusName.textContent = data;
  } else {
    statusName.style.color = "green";
    statusName.textContent = "사용가능";
    inputName.disabled = true;
  }
});
