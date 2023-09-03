const spanEl=document.querySelector("header span");


// 1st type of onclick 

// spanEl.onclick=()=>{
//  alert("i am GIRI")
// }
// console.log(spanEl);


//2nd type of onclick

// spanEl.setAttribute("onclick",'alert("i am GIRI")');

// 3rd type on onclick

// function credits(){
//    alert("i am GIRI") ;
// }

// spanEl.onclick=credits;


//AddEventListener

// window.addEventListener();
// document.addEventListener();
// Element.addEventListener();

// spanEl.addEventListener("dblclick",function(){
//     console.log("i have been clicked");
//     alert("i have been clicked");
// })

// function eventmsg(){
//     alert("hi I am GIRI");
//     alert("hi I am NANDHINI");
// }

//  function handlecreditMsg(event){
    //     alert("i am GIRI");
    
    //     console.log(event.target);
    // }
    
    
    const handlecreditMsg=(event)=>{
        alert("i am GIRI");
    
   console.log(event.target);
        alert(event.type+"at"+event.currentTarget.innerHTML);
        alert("coordinate:"+event.clientX+":"+event.clientY);
        
    }
    spanEl.addEventListener("click",handlecreditMsg);
    
    document.addEventListener("contextmenu",handlecreditMsg)
