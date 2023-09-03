// const spanEl=document.querySelector("header span");

// const handlecreateMsg=(event)=>{
//     alert("document saved");
// };

// spanEl.addEventListener("click", handlecreateMsg, {once: true});

const formEl=document.querySelector("form");
const divEl=document.querySelector("form div");
const pEl=document.querySelector("form p");

formEl.addEventListener("click",(event)=>{
    alert(`Target:${event.target.tagName},this:${formEl.tagName}`)
});

divEl.addEventListener("click",(event)=>{
    alert("i am NANDU")
    // event.stopPropagation();

    // event.stopImmediatePropagation();// hi i am nandu vum varaathu
});

pEl.addEventListener("click",(event)=>{
    alert("i am NG")
});


// divEl.addEventListener("click",(event)=>{
//     alert("hi i am NANDU")
//     event.stopPropagation();//remove pani mela pogama thadukum
//     // event.stopImmediatePropagation();
// });



// to catch the event to the capturing phase

formEl.addEventListener("click",()=>{
    capture:true;
})// by default false we convert into true

for(let elem of document.querySelectorAll("form, form *")){
    console.log(elem);
}