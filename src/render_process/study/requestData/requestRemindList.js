window.api.send("remind-list", true);
graphBox.style.overflow = "auto";
window.api.receive("remind-list-answer", (data) => {
  while (graphBox.firstChild) {
    graphBox.removeChild(graphBox.firstChild);
  }
  data.sort((a, b) => b.days - a.days);
  // console.log(data);
  data.forEach((element) => {
    const remindObject = document.createElement("div");
    remindObject.className = "remind-object";
    const remindTitle = document.createElement("p");
    remindTitle.className = "remind-title";
    const remindChapter = document.createElement("p");
    const remindDays = document.createElement("p");
    const remindLastPersent = document.createElement("p");
    const remindBtn = document.createElement("button");
    remindBtn.className = "remind-btn";

    remindTitle.textContent = element.title;
    remindChapter.textContent = element.chapter;
    remindDays.textContent = element.days + "일 초과";
    remindLastPersent.textContent =
      "마지막 정답률: " + element.lastCorrectPersent + "%";
    remindBtn.textContent = "시작";

    remindObject.className = "remind-object";

    remindBtn.addEventListener("click", () => {
      window.api.send("start-remind", {
        title: element.title,
        chapter: element.chapter,
      });
    });

    remindObject.append(
      ...[remindTitle, remindChapter, remindDays, remindLastPersent, remindBtn]
    );
    graphBox.append(remindObject);
  });
});

window.api.receive("start-remind-answer", (data) => {
  window.api.send("page:change", "windows/studyTestMain.html");
});
