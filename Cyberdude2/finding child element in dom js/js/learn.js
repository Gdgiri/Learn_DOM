const foodcontainerEl=document.querySelector("#food-container");

const list=document.querySelectorAll("li");


//queryselectorAll: Nodelist--> it is not live
console.log(list,list.length);

//children: HTML collection---> it as live

console.log(foodcontainerEl.children, foodcontainerEl.children.length);

// child nodes

console.log(foodcontainerEl.childNodes, foodcontainerEl.childElementCount);

// first child
console.log(foodcontainerEl.firstChild,foodcontainerEl.firstChild);
console.log(foodcontainerEl.firstElementChild.innerText);

// last child
console.log(foodcontainerEl.lastChild);
console.log(foodcontainerEl.lastElementChild.innerText);

