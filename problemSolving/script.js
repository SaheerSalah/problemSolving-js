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
// TASK 10 
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
const vowels = ["a", "e", "i", "o", "u"];
function getCount(str) {
  let count = 0;
  str.split("").forEach((char)=> vowels.includes(char)? count++ :count);
  return count;
}
// Task 11
//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// لو ما فيه ماتش رح ترجع نلل وما بنفع اجيب الطول ل النلل لهيك بالاول بفحص ادا فيه ماتش اساسا
function XO(str) {
  const Omatch = str.match(/o/gi);
  const Xmatch= str.match(/x/gi);
  return (Omatch && Omatch.length) == (Xmatch && Xmatch.length);
}
// Task 12
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

function friend(friends){
  let fre = friends.filter((friend)=>friend.length==4);
  return fre;
};

// Task 13
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
  return (array.reduce((pre, current)=>pre+current,0))%2==0 ?"even": "odd";
}

// ** new start **

// & Task 14
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
  let minNum = Math.min(...numbers);
  let index = numbers.indexOf(minNum) ;
  return numbers.filter((_, i) => i !== index);
}

// & Task 15 
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
  let arrstring = numbers.split(" ");
  let toNumArr = arrstring.map(num => Number(num));
  return `${Math.max(...toNumArr)} ${Math.min(...toNumArr)}`;
}

// & Task 16
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)

// shift use to convert [5] to 5 
function stray(numbers) {
  const seen = new Set();
  if (numbers.length>=3){
  const ArrduplicateNum = numbers.filter(item => {
    if (seen.has(item)) {
      return true;
    }
    seen.add(item);
    return false;
  });
  let duplicateNum = ArrduplicateNum.shift();
   return numbers.filter(item => item!==duplicateNum).shift();
  }
    return ;
}
// const stray = nums => nums.reduce((x, y) => x ^ y);
// const stray = numbers => numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));


// & Task 17
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.
// Examples:(Input1, Input2 --> Output (explanation)))

function addBinary(a,b) {
  let number = a+b;
  return number.toString(2);
}

// & Task 18
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

function sortByLength (array) {
  let sortedArray = array.sort((a, b) => a.length - b.length);
  return sortedArray;
}

// & Task 19
// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
// نسبة الخطا هي عدد الاحرف الي بعد حرف ال m

function printerError(s) {
  const error = s.split("").filter(letter => letter > "m");
  return `${error.length}/${s.length}`;    
}

// & Task 20
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
const binaryArrayToNumber = arr => {
  return parseInt(arr.join(""), 2);
};
// لديك عدد ثنائي كنص	✅=> parseInt(binary, 2)
// لديك عدد ثنائي مباشر (0b1101)	=>✅ .toString(10)

// arr.join("") يحول [0, 0, 0, 1] إلى "0001" ✅
// .toString(10) يحول النص "0001" إلى نفسه كنص "0001" ❌
// المشكلة: الناتج يظل نصًا، وليس عددًا عشريًا!

// const binaryArrayToNumber = arr => {
//   return arr.join("").toString(10);
// };
// console.log(binaryArrayToNumber([0, 0, 0, 1]));


// & Task 21
// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
function arithmetic(a, b, operator){
  switch (operator){
    case "add":
      return a+b;
    case "subtract":
      return a-b;
    case "multiply":
      return a*b;
    case "divide":
      return a/b;
    default:
      return "خطأ: العملية غير صحيحة";
  }

}

// & Task 22
// Count the number of divisors of a positive integer n.
// Random tests go up to n = 500000, but fixed tests go higher.

function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      count += (i * i === n) ? 1 : 2; 
    }
  }
  return count;
}



// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript