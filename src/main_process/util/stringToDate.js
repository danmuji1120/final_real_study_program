const dateString = "2024-01-29-10-09-59";
function stringToDate(data) {
  const dateArray = data.split("-").map(Number);
  dateArray[1] -= 1;
  const dateObject = new Date(...dateArray);

  return dateObject;
}
