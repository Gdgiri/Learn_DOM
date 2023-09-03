const foodcontainerEl=document.getElementById("food-container");
const duplicateEl=document.getElementById("duplicate");
const save=document.getElementById("");
// if the clone node were false it shows only one element
// const cloneDatafalse= foodcontainerEl.cloneNode();

// if the clone node is true all the element were shown
// const cloneData= foodcontainerEl.cloneNode(true);


//  console.log(cloneDatafalse);


save.addEventListener("click",()=>{

    duplicateEl.innerHTML="";
    const cloneData= foodcontainerEl.cloneNode(true);
    duplicateEl.append(cloneData);
 });


