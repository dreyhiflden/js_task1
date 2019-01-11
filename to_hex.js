let toHex = value => {

  let hexVal = ["0", "1", "2", "3", "4", "5", "6", "8", "9", "A", "B", "C", "D", "E", "F"],
      reminder,
      returnValue = '',
      hexSymb = '0x';

  while (value !== 0) {
    reminder = value % 16;
    value = Math.floor(value / 16);
    returnValue = hexVal[reminder] + returnValue;
  }

  return `${hexSymb}${returnValue}`;

};

console.log(toHex(42));

