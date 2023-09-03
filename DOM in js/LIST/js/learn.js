function createAlertViaDOM(message) {
    const main = document.getElementById("main");
  
    // Creating div element
    const div = document.createElement("div");
    const textNode = document.createTextNode(message);
  
    // Assigning className
    div.className = "alert";
  
    // Append
    div.append(textNode);
    main.prepend(div);
  }
  
  createAlertViaDOM("Food is updated!");

const favouriteFoods=[
  "veg-briyaani",
  "kalan-briyaani",
  "cauliflower-briyaani"
];

for(let i=0; i<favouriteFoods.length;i++){
  // console.log(`My favourite foods is: ${favouriteFoods[i]}`);
  document.write(favouriteFoods[i] );
  
}



