function balikString(str) {
    var tampungString = str;
    var tempString = '';
   
    for (let i = str.length - 1; i >= 0; i--) {
    tempString = tempString + tampungString[i];
    }
  return tempString;
  }
  console.log(balikString('hello world!'));
  