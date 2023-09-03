const inputName=document.querySelector(".inputName-container input");

console.log(inputName.type);

console.log(inputName.id);

console.log(inputName.name);

console.log(inputName.placeholder);

console.log(inputName.value);

// console.log(inputName.value="Anu");

console.log(inputName.value);

// inputName.setAttribute("value","Nandhini" );

inputName.setAttribute("value","22" );

const int=parseInt(inputName.value,10);

console.log(typeof int);