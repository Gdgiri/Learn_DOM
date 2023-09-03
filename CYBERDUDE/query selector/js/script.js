let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");
let foodContainer = document.getElementById("food-container");

inputBtn.addEventListener("click", () => {
  foodContainer.innerHTML += `<li class="food-item">${inputFood.value.toUpperCase()}</li>`;
});

// in the above code in input box text were get and store using click event

// getElementsByClassName
const foodItems = foodContainer.getElementsByClassName("food-item");

let allFoods = [].map.call(foodItems, (food) => food.textContent);

// console.log(allFoods);

// getElementByTagName

const foodItemsEl=document.getElementsByTagName("li");
const namecheck = document.getElementsByName("input-food-name")

// console.log(namecheck);

// className and TagName both are same we use our preference

// ithu avalavaa use aagaathu

const result=document.querySelector("li:last-child");

console.log(result.innerText);

// query selector were use more

// getElements gave set of array
// but query selector and query selector all gave set of nodes

// queryselectorAll

const op=document.querySelectorAll("li")

console.log(op[0].innerText);