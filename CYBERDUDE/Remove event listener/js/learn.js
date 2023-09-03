const spanEl=document.querySelector("header span");



const handlecreditMsg=(event)=>{
    // alert("i am GIRI");

    console.log("removed");
    spanEl.removeEventListener("click",handlecreditMsg)// one time click
    
};

//adding event listener
spanEl.addEventListener("click",handlecreditMsg);

//remove

// after 5 seconds click event were wont work
// setTimeout(() => {
//     spanEl.removeEventListener("click",handlecreditMsg);
// }, 5000);


  

