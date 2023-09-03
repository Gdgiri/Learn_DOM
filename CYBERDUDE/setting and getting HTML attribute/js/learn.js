const inputName=document.querySelector(".inputName-container input");

// setting the Attribute



inputName.setAttribute("value","Nandhini" );

// getting attribute

const eligible=inputName.getAttribute("iseligible")

console.log(eligible);

const place=inputName.getAttribute("place")

console.log(place,eligible);

console.log(inputName);

console.log(inputName.attributes[6].value);

console.log(inputName.attributes.name.value);

console.log(inputName.attributes.id.value);

console.log(inputName.hasAttribute("place"));

console.log(inputName.hasAttribute("age")); 

inputName.removeAttribute("iseligible")

console.log(eligible);

console.log(inputName.getAttribute("style"));

console.log(inputName.style);

