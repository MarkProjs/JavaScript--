function calcBook1() {
  let book1value = document.getElementById("book1").value;
  return book1value * 19.99;
}

function createBook1() {
  let book1Input = document.getElementById("book1").value;
  let p1 = document.createElement("p");
  p1.style.fontWeight = "bold";
  p1.innerHTML = `Basic Web Programming (Quantity = ${book1Input}): $${calcBook1()}`;
  document.body.appendChild(p1);
}

function calcBook2() {
  let book2value = document.getElementById("book2").value;
  return book2value * 86.00;
}

function createBook2() {
  let book2Input = document.getElementById("book2").value;
  let p2 = document.createElement("p");
  p2.style.fontWeight = "bold";
  p2.innerHTML = `Intro to PHP (Quantity = ${book2Input}): $${calcBook2()}`;
  document.body.appendChild(p2);
}

function calcBook3() {
  let book3value = document.getElementById("book3").value;
  return book3value * 55.00;
}

function createBook3() {
  let book3Input = document.getElementById("book3").value;
  let p3 = document.createElement("p");
  p3.style.fontWeight = "bold";
  p3.innerHTML = `Advanced JQuery (Quantity = ${book3Input}): $${calcBook3()}`;
  document.body.appendChild(p3);
}

function calculateTotal() {
  createBook1();
  createBook2();
  createBook3();
  let total = calcBook1() + calcBook2() + calcBook3();
  let p4 = document.createElement("p");
  p4.style.fontWeight = "bold";
  p4.innerHTML = `Total: $${total}`;
  document.body.appendChild(p4);
}

function refreshPage() {
  location.reload();
}