function renderWordLine() {
  const result = {};
  const lWordLineBox = [...wordLineBox.children];
  lWordLineBox.forEach((wordLine) => {
    const innerList = [];
    lWordLine = [...wordLine.children];
    // console.log(typeof lWordLine[0]);
    lWordLine.forEach((element) => {
      if (element.nodeName === "INPUT") {
        innerList.push(element.value.split(","));
      }
    });
    result[Object.keys(result).length] = innerList;
  });
  return result;
}
