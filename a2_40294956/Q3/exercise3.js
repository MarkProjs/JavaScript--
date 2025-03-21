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
   return arr.reduce((sum, item) => {
    let num = parseFloat(item);
    return isNaN(num) ? sum : sum + num;
   }, 0);
}

function sumOnlyNumbers() {
  let input = document.getElementById("addInput").value;
  document.getElementById("add").textContent = `Sum: ${addOnlyNumbers(input.split(","))}`;
}

function getDigits(str) {
  return str.match(/\d/g);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function getCurrentDate() {
  const date = new Date();
  return date.toLocaleDateString();
}