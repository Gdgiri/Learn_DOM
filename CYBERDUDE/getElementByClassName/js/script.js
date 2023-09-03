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

console.log(allFoods);
