const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
const whitespaceRegex = /\s/;
const emptyStringRegex = /^\s*$/;

function checkString(name) {
  if (specialCharacterRegex.test(name) === true) {
    return "특수문자 안됨";
  } else if (whitespaceRegex.test(name) === true) {
    return "띄어쓰기 하지마";
  } else if (emptyStringRegex.test(name) === true) {
    return "뭐라도 좀 써라";
  } else {
    return true;
  }
}

module.exports = checkString;
