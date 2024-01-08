// range input의 변화에 따라 숫자가 변하도록 하는 이벤트
const inputRange = document.getElementById("inputRange");
const textRange = document.getElementById("textRange");

const names = [...document.getElementById("nameBox").children];

const ableNames = {
  set() {
    for (let i = 0; i < names.length; i++) {
      if (i < inputRange.value) {
        names[i].disabled = false;
      } else {
        names[i].value = "";
        names[i].disabled = true;
      }
    }
  },
};

textRange.textContent = inputRange.value;
ableNames.set();

inputRange.addEventListener("input", (event) => {
  textRange.textContent = event.target.value;
  ableNames.set();
});
