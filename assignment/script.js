// JavaScript tasks are linked to the HTML page. As soon as you open the HTML page, open the console, and you'll see the output of the code
// Task 2
const numbers = [10, 41, 88, 17, 94, 56, 35, 88, 24, 52, 100];

function calculateTotalSumAndAverage() {
  let TotalSum = numbers.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  }, 0);
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
