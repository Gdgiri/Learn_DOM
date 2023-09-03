const foodcontainerEl=document.querySelector("#food-container li");

// console.log(foodcontainerEl.innerText);

// const parent=document.body.children[3].children[0];

// console.log(parent);

const parent=foodcontainerEl.parentNode;

console.log(parent);

console.log(foodcontainerEl.parentElement);

console.log(document.body.parentNode);

console.log(document.body.parentElement); 

console.dir(document.documentElement.parentNode);

console.dir(document.documentElement.parentElement);