const foodcontainerEl=document.getElementById("food-container");

const payasamli=document.querySelector(".food-container :first-child")
const li=document.createElement("li");

li.textContent="Milkshake";
li.className="food-item";

// new way
payasamli.replaceWith(li);

//old way

// payasamli.parentNode.replaceChild(li,payasamli)


// foodcontainerEl.replaceChildren("text1","text2");


const maggi=document.createElement("li")
maggi.textContent="maagi";
maggi.className="food-item";


foodcontainerEl.replaceChildren(maggi,li);