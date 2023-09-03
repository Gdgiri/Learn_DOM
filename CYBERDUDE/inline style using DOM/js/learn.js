const inputName=document.querySelector(".inputName-container input");

const btnEl=document.querySelector(".inputName-container button");

//set Attribute

btnEl.setAttribute(
    "style","padding: 10px 20px; font-size: 14px; background-color: royalblue; color: white; border: none; border-radius: 5px; text-transform: uppercase; outline:none;"
);

// Direct property access

console.log(btnEl);

console.log(btnEl.style.padding="6px 10px");

// css text

btnEl.style.cssText="background-color:#0d0630; color:white;padding:6px 10px";

// if we type the below code simple it over write the above all codes so we want to append this code with '+=' 
btnEl.style.cssText +="font-weight:bold";

//getin the style

console.log(btnEl.style.backgroundColor);

console.log(window.getComputedStyle(btnEl,"border-right-style"));