function addNumbers(arr) {
   return arr.reduce((acc, n) => acc + n, 0);
}

function calculateSum() {
  let input = document.getElementById("sumInput").value;
  let numbers = input.split(",").map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
  let sum = addNumbers(numbers);
  document.getElementById("sum").textContent = `Sum: ${sum}`;
}

function findMaxNumbers(...arr) {
   return Math.max(...arr);
}

function maxNumber() {
  let input = document.getElementById("maxInput").value;
  let numbers = input.split(",").map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
  let max = findMaxNumbers(...numbers);
  document.getElementById("max").textContent = `Max: ${max}`;
}

function addOnlyNumbers(arr) {
  let sum = 0;
  arr.forEach(e => {
     e = e.trim(); // Remove extra spaces
     if (e.startsWith('"') && e.endsWith('"')) {
         e = e.slice(1, -1); // Remove surrounding quotes if present
     }
     let num = parseFloat(e);
     if (!isNaN(num)) {
         sum += num;
     }
  });
  return sum;
}

function sumOnlyNumbers() {
  let input = document.getElementById("addInput").value;
  document.getElementById("add").textContent = `Sum: ${addOnlyNumbers(input.split(","))}`;
}

function getDigits(str) {
  return str.match(/\d/g);
}

function listDigits() {
  let input = document.getElementById("digitsInput").value;
  let digits = getDigits(input);
  document.getElementById("digits").textContent = `Digits: ${digits.join(", ")}`;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function stringReversed() {
  let input = document.getElementById("reverseInput").value;
  document.getElementById("reverse").textContent = `Reversed: ${reverseString(input)}`;
}

function getCurrentDate() {
  let options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
  const date = new Date();
  return date.toLocaleDateString("en-US", options);
  
}

function currentDate() {
  document.getElementById("date").textContent = `Current date: ${getCurrentDate()}`;
}