// JavaScript tasks are linked to the HTML page. As soon as you open the HTML page, open the console, and you'll see the output of the code
// Task 2
const numbers = [10, 41, 88, 17, 94, 56, 35, 88, 24, 52, 100];

function calculateTotalSumAndAverage() {
  let TotalSum = numbers.reduce((previousValue, currentValue)=>
     previousValue + currentValue
  , 0);
  let Average = TotalSum / numbers.length;
  return { TotalSum, Average };
}
const finalResult = calculateTotalSumAndAverage();
console.log(
  "the total sum for numbers : " +
    finalResult.TotalSum +
    " and the Average : " +
    finalResult.Average
);

// Task 3
const Users = [
  "Hanks",
  "Johansson",
  "Leonardo",
  "Smith",
  "Meryl",
  "Johnson",
  "Johansson",
  "Smith",
];
function removeduplicates(arrayOfStrings) {
  const uniqueValues = [...new Set(arrayOfStrings)];
  return uniqueValues;
}
console.log(removeduplicates(Users));

// TASK 3
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
const arr = [ 6, 2, 1, 8,10, 10];
function sumArray(array) {
  if (!array || array.length <= 2) {
    return 0; 
  }
let sortedArray = [...array].sort((a, b) => a - b);
// ممكن نستخدم slice
  sortedArray.shift();
  sortedArray.pop();
 return sortedArray.reduce((prevalue,curentvalue)=> prevalue + curentvalue,0);
}
console.log(sumArray(arr));

//  Task 4 
function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];
  let sum = 0, count = 0;
  input.forEach((num)=> num > 0? count++:sum+=num);
  return [count, sum];
}

// Task 5
// Write a function that removes the spaces from the string, then return the resultant string.
const String = "8 j 8   mBliB8g  imjB8B8  jl  B";
function noSpace(input){
  // return input.replaceAll(" ", "");
  // return input.replace(/\s+/g, '');
  return input.split(" ").filter(item => item!== " ").join(""); 
}
console.log(noSpace(String));

// Task 6
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
const quarterOf = (month) => {
  return Math.ceil(month/3)
}
console.log(quarterOf(11));
// Task7
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
function longest(s1, s2) {
  return [...new Set(s1+s2)].sort().join("");
}
console.log(longest("aretheyhere","yestheyarehere" ));

// Task8
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filter_list(list) {
  return list.filter((item)=>typeof item == "number");  
 }

//Task9
// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
var isSquare = function(n){
  return Math.sqrt(n)%1==0 ;
}