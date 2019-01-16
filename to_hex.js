const toHex = value => {

  let hexVal = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'],
      remainder,
      result = '';

  while (value !== 0) {
    remainder = value % 16;
    value = parseInt((value / 16), 10);
    result = hexVal[remainder] + result;
  }

  return result;
};

console.log(toHex(420));

console.assert(
  toHex(42).toLowerCase() === '2a',
  '42 should be converted to 2a'
);

console.assert(
  toHex(420).toLowerCase() === '1a4',
  '420 should be converted to 1a4'
);
