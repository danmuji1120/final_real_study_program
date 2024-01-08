// 중복 선택이 안 되는 체크 박스 이벤트
const checkbox = [...document.getElementById("checkBox").children];
checkbox[0].checked = true;
checkbox.forEach((element, index) => {
  element.addEventListener("input", (event) => {
    if (element.checked === false) {
      element.checked = true;
    } else {
      checkbox.forEach((inelement, inindex) => {
        if (index !== inindex) {
          inelement.checked = false;
        }
      });
    }
  });
});
