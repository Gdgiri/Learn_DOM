let inputFood=document.getElementById('input-food');
let btn=document.getElementById('btn');
let response=document.getElementById('response');

// console.log(inputFood,btn);

btn.addEventListener("click",()=>{
    // console.log(inputFood.value);
    response.innerText=inputFood.value
    
    // alert("hey i have been clicked")
}); 
// in the above code in input box text were get and store using click event