const homeBtn = document.getElementById("homeBtn");

homeBtn.addEventListener("click", () => {
  window.api.send("page:change", "index.html");
});
