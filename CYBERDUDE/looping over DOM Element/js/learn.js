const foodcontainerEl=document.querySelectorAll(".food-container li");




const favfoods=[
    "veg-briyaani",
    "kalan-briyaani",
    "cauliflower manjooriyan",
    "kalan fry"
];

for(let i=0;i<favfoods.length;i++){
    console.log(`My favourite food is: ${favfoods[i]}`);
}

for(const item of favfoods){
    console.log(`My favourite foods is :${item}`);
}

const foodItems=[];

for(const item of foodcontainerEl){
    foodItems.push(item.innerText);
    
}

console.log(foodItems);


// spread operator

foodcontainerEl.forEach((food)=>console.log(`Food: ${food.nodeType}`));