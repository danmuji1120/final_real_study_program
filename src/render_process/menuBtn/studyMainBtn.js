const studyMainBtn = document.getElementById("studyMainBtn");

studyMainBtn.addEventListener("click", () => {
  window.api.send("page:change", "windows/studyMain.html");
});
