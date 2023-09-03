let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");
let foodContainer = document.getElementById("food-container");

inputBtn.addEventListener("click", () => {
 let listfood=document.createElement("li");
  
 const divItem=document.createElement('div');
 const divremovebtn=document.createElement("div");

 listfood.append(divItem,divremovebtn)
 divremovebtn.parentElement.setAttribute("onclick","removeItem(event)");

 divremovebtn.innerHTML=" <i>❌</i>";


divItem.textContent=inputFood.value;
  listfood.className="food-item";

  foodContainer.append(listfood);

  listfood.append(divItem);
  listfood.append(divremovebtn);

  inputFood.value="";

});

function removeItem(event){
  let existingList=event.target.parentNode.parentNode;
  
  existingList.remove();// new way

  // existingList.parentNode.reoveChild(existingList); // old way
}