module.exports = function check(str, bracketsConfig) {
  let checkStr = '';
  let arr = bracketsConfig;

  for (let i = 0; i < str.length; i++) {
      for (let key of arr) {
          if (str[i] === key[1] && checkStr[checkStr.length - 1] === key[0]) {
              checkStr = checkStr.slice(0, checkStr.length - 1);
          } else if (str[i] === key[0]) {
              checkStr += str[i];
          } else if (str[i] === key[1]) {
            checkStr += str[i];
          }
      }
  }

  return checkStr.length === 0 ? true : false;
}