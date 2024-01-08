const newTestBoxBtn = document.getElementById("newTestBoxBtn");

newTestBoxBtn.addEventListener("click", () => {
  window.api.send("page:change", "windows/newTestBoxPopup.html");
});
