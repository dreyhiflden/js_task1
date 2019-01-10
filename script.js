// Task 1.1 Sum of odd numbers


let oddNumbers = []; // Array to collect odd numbers
let tria = [];       // Array to collect triangular numbers
let sliced = [];     // Array of triangular numbers to make pyramid like figure
let maxnumb;


for (let i = 0; i < 1000; i++) { // Генерируем числа от и до
  if (i % 2) { // проверячем odd число
    oddNumbers.push(i); // если odd то добавляем в массив
  }

  function triangleNumber(n)
  {
    return (n * (n + 1)) / 2;
  }

  tria.push(triangleNumber(i));

}

function slicy(curr, next) {
  sliced.push(oddNumbers.slice(curr, next));
}

for (let j = 0; j < oddNumbers.length / 6; j++) {
  slicy(tria[j], tria[j+1]);
}

let num = sliced[1].reduce((sum, value) => sum + value);

// for (let i = 0; i < numbers.length; i++) {
//   function triangleNumber(n)
//   {
//     return (n * (n + 1)) / 2;
//   }

// x = i(i+1)/2;
//   sliced.push(numbers.slice(triangleNumber(i), triangleNumber(++i)));

  // let curr = triangleNumber(i);
  // let next = triangleNumber(++i);
  // let next = triangleNumber(++i);

  // sliced.push(numbers.slice(0, 1));
  // console.log(curr);
// }
//
// function sliceee(curr, next) {
//   sliced.push(numbers.slice(triangleNumber(i), triangleNumber(++i)));
// }
//
// console.log(sliceee());

// for (let i = 0; i < numbers.length; i++) {
//     sliced.push(numbers.slice(i));
// }
// for (let j = 1; j < 10; j++) {
//     sliced.push(numbers.slice(0, j));
// }

// То что должен в идеале получить
// sliced.push(numbers.slice(0, 1)); // разница между числами 1
// sliced.push(numbers.slice(1, 3)); // разница между числами 2
// sliced.push(numbers.slice(3, 6)); // разница между числами 3
// sliced.push(numbers.slice(6, 10)); // разница между числами 4 (берется предыдущее в начало и добавляется 4)
// sliced.push(numbers.slice(10, 15)); // разница между числами 5 (берется предыдущее в начало и добавляется 4)


//
// let odds = numbers.filter(x => x % 2); // фильтруем
//
//
// let tan
//
// function row(n) {
//
//     for (let i = 0; i < odds.length; i++) {
//         for (let x = 1; x < n; x++) {
//             ne
//         }
//     }
//
//
//     // for (let i = 0; i <
//     //   ; i++) {
//     //
//     // }
//
//
//     return odds.slice(n + 1, n + 5);
// }

// let sum = ee.reduce((sum, value) => sum + value);


// console.table(sliced);
// console.log(tria);
console.log(num);

// function triangleNumber(n)
// {
//   return (n * (n + 1)) / 2;
// }
//
// console.log(triangleNumber(3));
// console.table(odds);
// console.log(row(1));