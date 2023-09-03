let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");
let foodContainer = document.getElementById("food-container");

inputBtn.addEventListener("click", () => {
  const listfood=document.createElement("li");
  const text=document.createTextNode(inputFood.value);
// li.textContent(`${inputFood.value.toUpperCase()}`);
  listfood.className="food-item"
  foodContainer.append(listfood);
  listfood.append(text);

});

// append naa DOM la text type pani atha HTML la sekurathu