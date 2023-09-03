const foodcontainerEl=document.getElementById("food-container");

// const li=document.createElement("li");

// li.textContent="puli-rice";
// li.className="food-item";

// foodcontainerEl.insertAdjacentHTML("afterbegin","food-item");
// foodcontainerEl.insertAdjacentHTML("afterend","food-item");
// foodcontainerEl.insertAdjacentHTML("beforebegin","food-item");
// foodcontainerEl.insertAdjacentHTML("beforeend","food-item");


// foodcontainerEl.insertAdjacentText("afterbegin","fooditem");


const li=document.createElement("li");

li.textContent="payasam";
li.className="food-item";

foodcontainerEl.insertAdjacentElement("afterbegin",li);
foodcontainerEl.insertAdjacentElement("beforeend",li);
