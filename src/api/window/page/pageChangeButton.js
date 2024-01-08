// 페이지를 전환시켜주는 버튼 이벤트
// 꼭 버튼 요소의 id가 "changePageBtn"일 것
// 버튼 요소에 "data-html-path="<이동할 html 주소>""를 꼭 집어 넣을 것

// <button id="changePageBtn" data-html-path="index2.html">페이지 전환</button>

const changePageBtn = document.getElementById("changePageBtn");
changePageBtn.addEventListener("click", () => {
  window.api.send("page:change", changePageBtn.dataset.htmlPath);
});
