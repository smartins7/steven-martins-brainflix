//Timestamp Converter

function dateConvert(date) {
  const months = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  const dateConvert = `${
    months[date.getMonth()]
  }/ ${date.getDate()}/ ${date.getFullYear()}`;

  return dateConvert;
}

export default dateConvert;
