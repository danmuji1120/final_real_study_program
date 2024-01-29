const titleBox = document.getElementById("title-box");
const windowTitle = document.getElementById("window-title");

window.api.send("request-music-title");

window.api.receive("request-music-title-answer", (data) => {
  console.log(data);
  const fragment = document.createDocumentFragment();
  data.forEach((title) => {
    const titleButton = document.createElement("button");
    titleButton.textContent = title;
    // ----------------------------------------------------------------------
    titleButton.addEventListener("click", () => {
      windowTitle.textContent = title;
      // window.api.send("load-title-data", titleButton.textContent);
    });
    // ----------------------------------------------------------------------
    titleButton.addEventListener("mouseenter", () => {
      // 최근 테스트 기록을 요청한다.
    });
    fragment.append(titleButton);
  });
  const firstChild = titleBox.firstChild;
  titleBox.insertBefore(fragment, firstChild);
});
