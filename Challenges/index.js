// Q no. -: 1.. Calculating sum of all numbers in an integer array

function sumArray(numbers) {
  let sum = 0;
  try {
    for (let  i= 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  } catch (err) {
    console.error("Cannot loop over the elements");
    throw err;
  }
}
const numbers = [80, 15, 10, 35];
const total = sumArray(numbers);
console.log(total);


// Q no. -: 2.. Sorting an array of integers using Bubble Sort Algorithms (Assending Order)

let Arr = [34, 3, 12, 45, 76, 19, 4];

for (let i = 0; i < Arr.length; i++) {
  for (let j = 0; j < Arr.length - i - 1; j++) {
    if (Arr[j] > Arr[j + 1]) {
      let temp = Arr[j];
      Arr[j] = Arr[j + 1];
      Arr[j + 1] = temp;
    }
  }
}

console.log(Arr);



//Q no. -: 3.. Reversing input of a string using For loop in decrement

let string = "Rider";
let newString = "";

try {
  for ( i= string.length  -1;  i >= 0; i--) {
    newString += string[i];
  }
} catch(err) {
  console.error('Not decrementing loop');
  throw err;
}
  console.log(newString);



//Q no. -: 4.. Converting Characters of string to all upperCase

let hobbie = "Ride faster then others";
let upperCaseHobbie = hobbie.toUpperCase();
console.log(upperCaseHobbie);




// Using try and catch block Handling the errors that may occures in the programs 
