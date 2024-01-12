// title 정보를 불러와 버튼을 생성하고 버튼 마다 타이틀 데이터를 요청하는 이벤트를 추가
const titleBox = document.getElementById("title-box");
const windowTitle = document.getElementById("window-title");

window.api.send("requset-title", true);
window.api.receive("requset-title-answer", (data) => {
  console.log(data);
  const fragment = document.createDocumentFragment();
  data.forEach((title) => {
    const titleButton = document.createElement("button");
    titleButton.textContent = title;
    // ----------------------------------------------------------------------
    titleButton.addEventListener("click", () => {
      windowTitle.textContent = title;
      window.api.send("load-title-data", titleButton.textContent);
    });
    // ----------------------------------------------------------------------
    fragment.append(titleButton);
  });
  const firstChild = titleBox.firstChild;
  titleBox.insertBefore(fragment, firstChild);
});
