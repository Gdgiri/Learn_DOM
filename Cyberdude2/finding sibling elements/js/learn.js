const foodcontainerEl=document.querySelector("ul:last-child li");

const numbers=document.getElementById("no");

console.log(numbers.nextSibling);
console.log(numbers.previousSibling);

console.log(numbers.nextElementSibling.innerText);
console.log(numbers.previousElementSibling.innerText);