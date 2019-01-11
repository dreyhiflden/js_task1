let reminder, // остаток
  integer, // целое число от деления
  hexsymb = '0x'; // символ хекса

function toHex(value) {
  // если есть остаток, то сохраняем в переменную reminder
  if (value % 16) {
    console.log("есть остаток");

    // уже на данном этапе (50) можно пошаманить и сделать конвертацию в HEX (типа 10 это d)
    reminder = value % 16;
    console.log(`Reminder value before convert to HEX is ${reminder}`)
    // if (reminder => 10) {convertToHexVal(reminder)};
    integer = parseInt((value / 16), 10); // убираем все после точки
  }
  // если нет остатка тогда присвиваем integer
  else {
    console.log("остатка нет");
    integer = value / 16;
    console.log(`Integer value before convert to HEX is ${reminder}`)
    // if (integer => 10) {convertToHexVal(integer)};
  }
  return `${hexsymb}${convertToHexVal(integer)}${convertToHexVal(reminder) || ''}`;

  // console.log(convertToHexVal(reminder));
}

function convertToHexVal(value) {
  console.log(`Value in convertToHexVal function is ${value}`);
  switch (value) {
    case 10: return value = 'A';
    case 11: return value = 'B';
    case 12: return value = 'C';
    case 13: return value = 'D';
    case 14: return value = 'E';
    case 15: return value = 'F';
    default: return value;
  }
}

console.log(toHex(42));
console.log(reminder ? `Reminder is ${reminder}` : `Is no reminder`);
console.log(integer ? `Integer is ${integer}` : `Integer is not set`);
