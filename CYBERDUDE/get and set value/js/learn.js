// function createalertviaDOM(msg){
//     const main=document.getElementById("main");

//     const div=document.createElement("div");
    
//     const textNode= document.createTextNode(msg);
    
//     // this is also creating div 
    
//     // project performent for we not use innerText
    
    
    
//     // div.textContent="successfull! Food is updated"
    
//     // assigning the className
//     div.className="alert";
    
    
//     //append type
//     div.append(textNode)
    
//     // console.log(div);
    
//     main.prepend(div);
    
    
// }


// createalertviaDOM("successfull! Food is updated" );

// how to get set contents via DOM using js

// textContent... it works in all nodes and elements
// innerText... it works in all elements
// innerHTML

const alertEl= document.querySelector(".alert .alert-message");

// innerText


// console.log(alertEl.innerText);
// console.log(alertEl.innerHTML);
// console.log(alertEl.textContent);

// setting

alertEl.innerText="<strong>✅ successfull!</strong> <i>food is updated</i>"

alertEl.innerHTML="<strong>✅ successfull!</strong> <i>food is updated</i>"

alertEl.textContent="<strong>✅ successfull!</strong> <i>food is updated</i>"