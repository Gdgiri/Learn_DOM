const foodcontainerEl=document.getElementById("food-container");
// for(let i=1;i<=100;i++){
//    const li= document.createElement("li");
//    li.textContent=`Briyaani ${i}`;
//    li.className="food-item";

//    foodcontainerEl.append(li);

// //    ithu usue panum pothu delay edukum atha seri seiya document fragment
// }

// const fragment=document.createDocumentFragment()

// // new DocumentFragment() ippudiyum create panalam

// for(let i=1;i<=100;i++){
//     const li= document.createElement("li");
//     li.textContent=`Briyaani ${i}`;
//     li.className="food-item";
 
//     fragment.append(li);
// }

// foodcontainerEl.append(fragment);

// example

const favouriteFoods=[
    "veg-briyaani",
    "kalan-briyaani",
    "Tomato-rice",
    "lemon-rice"
];

const foodFragment=document.createDocumentFragment()

favouriteFoods.forEach((food)=>{
    const li=document.createElement("li");
    li.textContent=food;
    li.className="food-item";

    foodFragment.append(li);



});

foodcontainerEl.append(foodFragment);