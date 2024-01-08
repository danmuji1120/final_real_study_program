const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
  window.api.send("page:change", "windows/musicTap.html");
});
