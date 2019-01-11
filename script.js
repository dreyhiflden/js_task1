// JS Task 1.1 Sum of odd numbers

// Refactored working prototype (except wee need set bigger arr_length to pass all tests)
// Comments need to show way of thinking to solve this task
// Correct version started at line 41

const arr_length = 100; // Set length of our arrays

/*
  Here I create array, fill this array by method .fill()
  and change values to index of each item by .map
  filter array for odd number by .filter method.
 */

let oddNumbers = Array(arr_length) // create array to collect all odd numbers
    .fill() // set all array items to empty value
    .map((v, i) => i) // change each item value to item index
    .filter(v => v % 2), // filter massive to odd numbers only

  triangleNumbs = Array(arr_length) // create array to collect triangular number sequence
    .fill() // set all array items to empty value
    .map((v, i) => (i * (i + 1)) / 2), // change each item value to triangular number by their index

  sortedOddNumbers = Array(100) // create array to hold sorted odd numbers like triangle (array of arrays)
    .fill() // set all array items to empty value
    .map((v, i) => oddNumbers.slice(triangleNumbs[i], triangleNumbs[i + 1]));
    /*
      change array items to result of slice oddNumbers array, start and end point of slice is values of triangleNumbs
     */


let rowSumOddNumbs = n => {
  return sortedOddNumbers[--n].reduce((s, v) => s + v);
};

// console.table(sortedOddNumbers);
// console.log(oddNumbers);
// console.log(triangleNumbs);

console.log(rowSumOddNumbs(3));

// Correct working version of 1.1 Sum of odd numbers

let rowSumOddNumbers = n => {
  return n**3;
};

console.log(rowSumOddNumbers(3));
